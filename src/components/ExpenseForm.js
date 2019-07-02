import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: 0.00,
        note: '',
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        const dollarFormat = /^\d+(\.\d{0,2})?$/;

        if (amount.match(dollarFormat)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}/>
                    <input 
                        type='number'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}/>
                    <textarea
                        placeholder='Add a note... (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}/>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}