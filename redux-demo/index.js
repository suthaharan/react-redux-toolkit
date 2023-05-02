const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED'

const initialState = {
    numOfCakes: 10,
    numOfBiscuits: 20,
}

// action creator orderCake
function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

// reducer
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes -1,
            }
        default:
            return state
    }
}

// create a store
const store = createStore(reducer);
console.log("Initial store ", store);

// subscribe to the store
const unsubscribe = store.subscribe(() => console.log("update state ", store.getState()));

// create an action
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

//unsubscribe from the store
unsubscribe();