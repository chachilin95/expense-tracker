import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboard = () => {
    return (
        <div>
            This is the Expense Dashboard
        </div>
    );
};

const AddExpense = () => {
    return (
        <div>
            This is the Add Expense Page
        </div>
    );
};

const EditExpense = () => {
    return (
        <div>
            This is the Edit Expense Page
        </div>
    );
};

const Help = () => {
    return (
        <div>
            This is the Help Page
        </div>
    );
};

const NotFound = () => {
    return (
        <div>
            404!
        </div>
    );
}

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ExpenseDashboard}/>
            <Route exact path='/create' component={AddExpense}/>
            <Route exact path='/edit' component={EditExpense}/>
            <Route exact path='/help' component={Help}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));