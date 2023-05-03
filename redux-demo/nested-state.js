
const redux = require('redux')
// initial state
const companyState = {
    name: 'Kurinchi',
    address: {
        street: '123 main street',
        city: 'abc city',
        country: 'US'
    }
}

// define the constant for action type
const STREET_UPDATED = 'STREET_UPDATED'

// action creator function
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}
// reducer
const reducerCompany = (state = companyState, action) => {
    switch(action.type){
        case STREET_UPDATED:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
            }
        default:
            return state
    }
}

// create store
const store = redux.createStore(reducerCompany);
console.log("Initial store ", store.getState());

// subscribe to the store to get changes in state
const unsubscribe = store.subscribe(() => console.log("updated state ", store.getState()));

// dispatch action
store.dispatch(updateStreet('345 Front Street'))

// unsubscribe
unsubscribe()

