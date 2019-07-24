import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import PrivateRoute from './PrivateRoute';

import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <PrivateRoute exact path='/dashboard' component={ExpenseDashboard}/>
                <PrivateRoute exact path='/create' component={AddExpense}/>
                <PrivateRoute exact path='/edit/:id' component={EditExpense}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;