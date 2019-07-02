import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: 0.00,
        note: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (e) => {
        const dollarFormat = /^\d+(\.\d{0,2})?$/;
        const amount = e.target.value;

        if (amount.match(dollarFormat)) {
            this.setState(() => ({ amount }));
        }
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