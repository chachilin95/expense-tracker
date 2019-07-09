import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import uuid from 'uuid';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
        startDateId: uuid(),
        endDateId: uuid()
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);        
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };
    
    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}/>

                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId={this.state.startDateId}
                    endDate={this.props.filters.endDate}
                    endDateId={this.state.endDateId}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (date) => dispatch(setStartDate(date)),
    setEndDate: (date) => dispatch(setEndDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);