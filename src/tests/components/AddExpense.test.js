import React from 'react';
import { shallow } from 'enzyme';

import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

// example of reusing spies and wrappers
let addExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    addExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpense addExpense={addExpenseSpy} history={historySpy}/>);
});

test('Should render AddExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});