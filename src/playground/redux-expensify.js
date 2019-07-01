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
    type: 'TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY',
    sortBy: 'amount'
});

const sortByDate = () => ({
    type: 'SORT_BY',
    sortBy: 'date'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
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
        case 'SORT_BY':
            return {...state, sortBy: action.sortBy};
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((e1, e2) => {
        if (sortBy === 'date') {
            return e1.createdAt < e2.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return e1.amount < e2.amount ? 1 : -1;
        }
    });
};

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const e1 = store.dispatch(addExpense({ description: 'Rent', amount: 1, createdAt: -21000 }));
const e2 = store.dispatch(addExpense({ description: 'Coffee', amount: 2, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: e1.expense.id }));

// store.dispatch(editExpense(e2.expense.id, { amount: 500}));

// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(999));
// store.dispatch(setEndDate(999));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

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