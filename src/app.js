import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

// Store
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({
    description: 'water bill',
    note: 'too damn wet',
    amount: 80000
}));

store.dispatch(addExpense({
    description: 'gas bill',
    note: 'too damn stinky',
    amount: 70000
}));

store.dispatch(setTextFilter('bill'));

store.dispatch(setTextFilter('water'));

//addexpense 2x (water bill, gas bill)
//settestfilter bill
//getvisibleexpenses

ReactDOM.render(<AppRouter/>, document.getElementById('app'));