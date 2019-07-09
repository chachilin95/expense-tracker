import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    startDateId: undefined,
    endDate: undefined,
    endDateId: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    startDateId: undefined,
    endDate: moment(0).add(3, 'days'),
    endDateId: undefined
};

export { filters, altFilters };