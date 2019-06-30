import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates};
                } else {
                    return expense;
                }
            });
        default:
            return state
    }
};

const setTextFilter = (text = '') => ({
    type: "TEXT_FILTER",
    text
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
            return {...state, text: action.text};
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

const e1 = store.dispatch(addExpense({ description: 'Rent', amount: 10000 }));
const e2 = store.dispatch(addExpense({ description: 'Coffee', amount: 25 }));

store.dispatch(removeExpense({ id: e1.expense.id }));

store.dispatch(editExpense(e2.expense.id, { amount: 500}));

store.dispatch(setTextFilter('Coffee'));
store.dispatch(setTextFilter(''));

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