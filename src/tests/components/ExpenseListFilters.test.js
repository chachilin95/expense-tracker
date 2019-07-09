import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;
beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilterSpy}
            sortByDate={sortByDateSpy}
            sortByAmount={sortByAmountSpy}
            setStartDate={setStartDateSpy}
            setEndDate={setEndDateSpy}/>);
});

test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({ 
        filters: altFilters 
    });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    const value = 'testing...';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
});

test('Should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDateSpy).toBeCalled();
});

test('Should sort by amount change', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmountSpy).toBeCalled();
});

test('Should handle date changes', () => {
    const dates = { 
        startDate: moment(0).add(4, 'years'), 
        endDate: moment(0).add(8, 'years')
    };
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(dates);
    expect(setStartDateSpy).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(dates.endDate);    
});

test('Should handle date focus changes', () => {
    const calendarFocused = 'endDate';

    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
