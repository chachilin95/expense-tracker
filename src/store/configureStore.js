import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            expenses: expensesReducer,
            filters: filtersReducer
        }),     
        componseEnhancers(applyMiddleware(thunk))
    );

    return store;
};