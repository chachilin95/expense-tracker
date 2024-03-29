import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ConfirmationModal from './Modal';

export class EditExpense extends React.Component {

    state = {
        seekingConfirmation: false
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    seekConfirmation = () => {
        this.setState({ seekingConfirmation: true });
    };

    cancelConfirmation = () => {
        this.setState({ seekingConfirmation: false });
    };

    handleRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                    <button
                        className='button button--critical'
                        onClick={this.seekConfirmation}>
                        Remove Expense
                    </button>
                </div>
                <ConfirmationModal
                    seekingConfirmation={this.state.seekingConfirmation}
                    handleRemoveExpense={this.handleRemoveExpense}
                    cancelConfirmation={this.cancelConfirmation} />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);