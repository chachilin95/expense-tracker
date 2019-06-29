import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Header from '../components/Header';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={ExpenseDashboard}/>
                <Route exact path='/create' component={AddExpense}/>
                <Route exact path='/edit' component={EditExpense}/>
                <Route exact path='/help' component={Help}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;