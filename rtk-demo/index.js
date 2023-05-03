const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const biscuitActions = require('./features/biscuit/biscuitSlice').biscuitActions

console.log('Initial state ', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Update state', store.getState())
})

// create an action
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(2));
store.dispatch(biscuitActions.ordered());
store.dispatch(biscuitActions.ordered());
store.dispatch(biscuitActions.restocked(1));
unsubscribe();