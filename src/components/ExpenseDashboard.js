import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export default class ExpenseDashboard extends React.Component {
    render() {
        return (
            <div>
                <ExpenseList/>
            </div>
        );
    }
}