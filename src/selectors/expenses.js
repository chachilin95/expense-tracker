export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((e1, e2) => {
        if (sortBy === 'date') {
            return e1.createdAt < e2.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return e1.amount < e2.amount ? 1 : -1;
        }
    });
};