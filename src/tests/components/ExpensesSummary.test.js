import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render ExpensesSummary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with one expense', () => {
    const expense = expenses[1];
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={expense.amount} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with multiple expenses', () => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={total} />);
    expect(wrapper).toMatchSnapshot();
});