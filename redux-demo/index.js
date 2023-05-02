const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const initialState = {
    numOfCakes: 10,
    numOfBiscuits: 20,
}

// action creator function orderCake
function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

function restockCake(qty){
    return {
        type: CAKE_RESTOCKED,
        quantity: qty,
    }
}

// reducer
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.quantity,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.quantity,
            }
        default:
            return state
    }
}

// create a store
const store = createStore(reducer);
console.log("Initial store ", store.getState());

// subscribe to the store to get changes in state
const unsubscribe = store.subscribe(() => console.log("update state ", store.getState()));

// create an action
store.dispatch(orderCake());
store.dispatch(restockCake(2));
store.dispatch(orderCake());
store.dispatch(orderCake());

//unsubscribe from the store
unsubscribe();