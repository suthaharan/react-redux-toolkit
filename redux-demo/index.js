const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const BISCUIT_ORDERED = 'CAKE_ORDERED'
const BISCUIT_RESTOCKED = 'CAKE_RESTOCKED'

const initialCakeState = {
    numOfCakes: 10,
}

const initialBiscuitState = {
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
function orderBiscuit(){
    return {
        type: BISCUIT_ORDERED,
        quantity: 1,
    }
}

function restockBiscuit(qty){
    return {
        type: BISCUIT_RESTOCKED,
        quantity: qty,
    }
}
// reducer
// (previousState, action) => newState
const reducerCake = (state = initialCakeState, action) => {
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

const reducerBiscuit = (state = initialBiscuitState, action) => {
    switch(action.type){
        case BISCUIT_ORDERED:
            return {
                ...state,
                numOfBiscuits: state.numOfBiscuits - action.quantity,
            }
        case BISCUIT_RESTOCKED:
            return {
                ...state,
                numOfBiscuits: state.numOfBiscuits + action.quantity,
            }
        default:
            return state
    }
}

const rootReducer = redux.combineReducers({
    cake: reducerCake,
    biscuit: reducerBiscuit
})
// create a store
const store = createStore(rootReducer);
console.log("Initial store ", store.getState());

// subscribe to the store to get changes in state
const unsubscribe = store.subscribe(() => console.log("update state ", store.getState()));

// create an action
// store.dispatch(orderCake());
// store.dispatch(restockCake(2));
// store.dispatch(orderCake());
// store.dispatch(orderCake());

const actions = bindActionCreators({ orderCake, restockCake, orderBiscuit, restockBiscuit}, store.dispatch)
actions.orderCake()
actions.restockCake(3)
actions.orderBiscuit()
actions.restockBiscuit(2)

//unsubscribe from the store
unsubscribe();