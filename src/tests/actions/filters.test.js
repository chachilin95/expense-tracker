import moment from 'moment';
import { 
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate 
} from '../../actions/filters';

test('Should generate set text filter action object', () => {
    const text = 'test';
    const action = setTextFilter(text); 
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text
    });
});

test('Should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY',
        sortBy: 'amount'
    });
});

test('Should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY',
        sortBy: 'date'
    });
});

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});