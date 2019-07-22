import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'thing'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'thing' }
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
    const store = createMockStore({})
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

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense);
        done();
    });
});

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
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

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    })
});