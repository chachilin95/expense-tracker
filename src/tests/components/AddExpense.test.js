import React from 'react';
import { shallow } from 'enzyme';

import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

// example of reusing spies and wrappers
let onSubmitSpy, historySpy, wrapper;
beforeEach(() => {
    onSubmitSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpense onSubmit={onSubmitSpy} history={historySpy}/>);
});

test('Should render AddExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
});