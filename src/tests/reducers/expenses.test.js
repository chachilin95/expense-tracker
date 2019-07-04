import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('Should setup default expense list', () => {
    const state = expensesReducer(undefined, { type: '@@INIT '});
    expect(state).toEqual([]);
});

test('Should add expense', () => {
    const expense = {
        id: '4',
        description: 'desc', 
        note: 'note', 
        amount: 1, 
        createdAt: 1
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ]);
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('Should not remove expenses if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 99
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('Should edit expense', () => {
    const updates = {
        description: 'updated', 
        note: 'updated', 
        amount: 0, 
        createdAt: 0
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], {...expenses[2], ...updates}]);
})