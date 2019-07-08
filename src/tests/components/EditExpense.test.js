import React from 'react';
import { shallow } from 'enzyme';

import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <EditExpense 
            expense={expenses[2]} 
            editExpense={editExpenseSpy} 
            removeExpense={removeExpenseSpy} 
            history={historySpy}>
        </EditExpense>)
});

test('Should render EditExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    const expense = expenses[2];

    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expense.id, expense)
});

test('Should handle onClick', () => {
    const expense = expenses[2];

    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expense.id });
});