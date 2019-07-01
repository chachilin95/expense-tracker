import React from 'react';
import ExpenseList from './ExpenseList';

export default class ExpenseDashboard extends React.Component {
    render() {
        return (
            <div>
                <ExpenseList/>
            </div>
        );
    }
}