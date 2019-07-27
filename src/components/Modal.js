import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app'); // added due to an API change for v3.1.7

const OptionModal = (props) => (
    <Modal
        isOpen={props.seekingConfirmation}
        contentLabel="Selected Option"
        onRequestClose={props.cancelConfirmation}
        closeTimeoutMS={200}
        className="modal">

        <h3 className='modal__title'>Delete Expense?</h3>
        <p className='modal__body'>Deleting this expense will permanently remove it from your expense list.</p>
        <div className='modal__buttons'>
            <button
                className='button'
                onClick={props.cancelConfirmation}>
                No, Keep Expense
            </button>
            <button
                className='button button--critical'
                onClick={props.handleRemoveExpense}>
                Yes, Delete Expense
            </button>
        </div>

    </Modal>
);

export default OptionModal;