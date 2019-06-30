import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// description: 'June Rent',
// note: 'This was the final payment for that address',
// amount: 54500,
// createdAt: 0
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));
store.subscribe(() => {
    console.log(store.getState());
})

const e1 = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const e2 = store.dispatch(addExpense({ description: 'Coffee', amount: 25 }));

store.dispatch(removeExpense({ id: e1.expense.id }));
store.dispatch(removeExpense({ id: e2.expense.id }));

const demoState = {
    expenses: [{
        id: 'asdf',
        description: 'June Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};