import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

export default class ExpenseDashboard extends React.Component {
    render() {
        return (
            <div>
                <ExpenseListFilters/>
                <ExpensesSummary/>
                <ExpenseList/>
            </div>
        );
    }
}