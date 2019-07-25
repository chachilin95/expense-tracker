import database from '../firebase/firebase';

////////// ADD EXPENSE //////////

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;

        const expense = { description, note, amount, createdAt };
        
        // add expense to firebase
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((e) => {
            console.log('startAddExpense Error:', e);
        });
    };
};

////////// REMOVE EXPENSE //////////

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(removeExpense({ id }));
            }).catch((e) => {
                console.log('startRemoveExpense Error:', e);
            });
    };
};

////////// EDIT EXPENSE //////////

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
            .update(updates)
            .then(() => {
                dispatch(editExpense(id, updates));
            }).catch((e) => {
                console.log('startEditExpense Error:', e);
            });
    };
};

////////// SET EXPENSES //////////

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        // get all expenses from firebase
        return database.ref(`users/${uid}/expenses`)
            .once('value')
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(setExpenses(expenses));
            }).catch((e) => {
                console.log('startSetExpenses Error:', e);
            });
    };
};