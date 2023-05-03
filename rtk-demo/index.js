const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log('Initial state ', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Update state', store.getState())
})

// create an action
store.dispatch(cakeActions.ordered());

unsubscribe();