import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set text filter', () => {
    const text = 'testing text filter';
    const action = {
        type: 'TEXT_FILTER',
        text
    };

    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { 
        type: 'SORT_BY', 
        sortBy: 'amount' 
    });
    
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const defaultState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action = {
        type: 'SORT_BY',
        sortBy: 'date'
    }
    
    const state = filtersReducer(defaultState, action);    
    expect(state.sortBy).toBe('date');
});

test('Should set startDate', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    
    const state = filtersReducer(undefined, action);    
    expect(state.startDate).toEqual(startDate);
});

test('Should set endDate', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    
    const state = filtersReducer(undefined, action);    
    expect(state.endDate).toEqual(endDate);
});