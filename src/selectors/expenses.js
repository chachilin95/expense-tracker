import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);

        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(createdAtMoment, 'day')) : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(createdAtMoment, 'day')) : true;
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