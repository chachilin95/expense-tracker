import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Login from '../components/Login';
import Header from '../components/Header';
import NotFound from '../components/NotFound';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/dashboard' component={ExpenseDashboard}/>
                <Route exact path='/create' component={AddExpense}/>
                <Route exact path='/edit/:id' component={EditExpense}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;