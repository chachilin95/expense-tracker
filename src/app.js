import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
    description: 'water bill',
    note: 'too damn wet',
    amount: 80000
}));

store.dispatch(addExpense({
    description: 'gas bill',
    note: 'too damn stinky',
    amount: 70000,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'rent',
    note: 'too damn wet',
    amount: 109500
}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));