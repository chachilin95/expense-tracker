import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {    
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1};
        case "DECREMENT":
            return { count: state.count - 1};
        case "RESET":
            return { count: 0};
        default:
            return state;
    }
});

console.log(store.getState()); // count = 0

store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState()); // count = 1

store.dispatch({
    type: 'RESET'
});

console.log(store.getState()); // count = 0