const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const biscuitActions = require('./features/biscuit/biscuitSlice').biscuitActions
const fetchUsers = require('./features/user/userSlice').fetchUsers
console.log('Initial state ', store.getState())

// LISTEN to changes using store.subscribe() function
const unsubscribe = store.subscribe(() => {
   // INSPECT the state using store.getState()
   // console.log('Update state', store.getState())
})

// DISPATCH an action 
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(2));
store.dispatch(biscuitActions.ordered());
store.dispatch(biscuitActions.ordered());
store.dispatch(biscuitActions.restocked(1));

store.dispatch(fetchUsers())

unsubscribe();