import { createStore } from 'redux';

const increment = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrement = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ({ count }) => ({
    type: 'SET',
    count
});

const store = createStore((state = { count: 0 }, action) => {    
    switch (action.type) {
        case "DECREMENT":
            return { count: state.count - action.decrementBy};
        case "INCREMENT":
            return { count: state.count + action.incrementBy};
        case "RESET":
            return { count: 0 };
        case "SET":
            return { count: action.count };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment({ incrementBy: 5 }));

store.dispatch(increment());

store.dispatch(decrement());

store.dispatch(decrement({ decrementBy: 99 }));

store.dispatch(reset());

store.dispatch(set({count: 401}));