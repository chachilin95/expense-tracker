import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('Should calculate total for zero expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('Should calculate total for one expense', () => {
    const expense = expenses[1];

    const total = selectExpensesTotal([expense]);
    expect(total).toBe(expense.amount);
});

test('Should calculate total for multiple expenses', () => {
    let totalExpect = 0;
    expenses.forEach((expense) => totalExpect += expense.amount);

    let total = selectExpensesTotal(expenses);
    expect(total).toBe(totalExpect);
});