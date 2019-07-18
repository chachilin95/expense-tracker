import React from 'react';
import { shallow } from 'enzyme';

import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

// example of reusing spies and wrappers
let startAddExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    startAddExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpense startAddExpense={startAddExpenseSpy} history={historySpy}/>);
});

test('Should render AddExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});