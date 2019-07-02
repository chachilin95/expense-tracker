import React from 'react';

import ExpenseForm from './ExpenseForm';

export default class AddExpense extends React.Component {
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm/>
            </div>
        );
    }
}