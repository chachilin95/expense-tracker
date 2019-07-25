import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
    addExpense, startAddExpense, 
    editExpense, startEditExpense,
    removeExpense, startRemoveExpense, 
    setExpenses, startSetExpenses,    
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'testUID';
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });

    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });

        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });;
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'thing'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'thing' }
    });
});

test('Should edit expense on database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expense = expenses[0];
    const id = expense.id;
    const updates = { note: 'edited note' };

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });

        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().note).toBe(updates.note);
        done();
    });
});

test('Should setup add expense action object (with data)', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expense = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expense
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense);
        done();
    });
});

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseDefaults = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    };

    store.dispatch(startAddExpense(undefined)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    })
});

test('Should setup setExpense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should fetch expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
    });

    done();
});