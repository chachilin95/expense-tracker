import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

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
            404 - <Link to='/'>Go Home</Link>
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink exact to='/' activeClassName="is-active">Dashboard</NavLink>
            <NavLink exact to='/create' activeClassName="is-active">Create Expense</NavLink>
            <NavLink exact to='/edit' activeClassName="is-active">Edit Expense</NavLink>
            <NavLink exact to='/help' activeClassName="is-active">Help</NavLink>
        </header>
    );
}

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));