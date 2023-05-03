# React Redux Toolkit
* Reference: https://www.youtube.com/watch?v=0awA5Uw6SJE

### React and Redux
* React is a library used to build user interfaces
* Redux is a library for managing the GLOBAL state of your application in a predictable way in Javascript applications
* Redux toolkit is a library for efficient redux development
* React-redux is a library that provides bindings to use React and Redux (Toolkit) together in an application
* React-redux is the official Redux UI binding library for React

### When to use redux in react application?
* All applications do not need redux
* You have large amounts of application state that are needed in many places in the app
* App state is updated frequently over time
* Logic to update that state may be complex
* App has a medium or large sized codebase, and might be worked on by many people

### Why Redux Toolkit?
* To address few shortcomings in Redux, Redux Toolkit emerged
  * Configuring redux in an app seems complicated
  * Lot of other packages have to be installed to get redux to do something useful
  * Redux requires too much boilerplate code
* Redux toolkit serves as an abstraction over redux. It hides the difficult parts ensuring you have a good developer experience.

### Getting started
```
$ mkdir redux-demo
$ cd redux-demo
$ npm init --y
$ npm i redux
$ touch index.js (write a console statement)
$ node index (run the application)

```

### React core concepts
* STORE - holds the state of the application
* ACTION - describes what happened in the application
* REDUCER - ties the store and actions together. handles the action and decides how to update the state
* Principle
  * 1st principle: The global state of your application is stored as an object inside a single store. Maintain the application state in a single object which would be managed by the Redux store. 
  * 2nd principle: The only way to change the state is to dispatch an action, an object that describes what happened. To update the state of your app, you need to let Redux know about that with an action. Not allowed to directly update the state object.
  * 3rd principle: To specify how the state tree is updated based on actions, you write pure reducers.
    * Reducer - (previousState, action) => newState


### Implementing actions
* ACTIONS - plain javascript objects. 
  * only way by which the application can interact with the redux store. 
  * have a type property that describes something that happened in the application
  * 'type' property is typically defined as string constants
  * action creator is a function that returns the action

### Implementing reducers
* Specify how the app's state changes in response to actions sent to the store
* (previousState, action) => newState

### ReduxStore - bringing action and reducers together
* Holds the application state
* Allows access to the state via getState()
* Allows state to be updated via dispatch(action)
* Registers listeners via subscribe(listener)
* Handles unregistering of listeners via the function returned by subscribe(listener)
```
$ node index
Initial store  { numOfCakes: 10, numOfBiscuits: 20 }
update state  { numOfCakes: 9, numOfBiscuits: 20 }
update state  { numOfCakes: 8, numOfBiscuits: 20 }
update state  { numOfCakes: 7, numOfBiscuits: 20 }

```

### Quick intro to Spread operator
```
@ Using spread operator to update an object value
const fruits = {a: "apple", b: "banana"};
const newFruits = { ...fruits, o: 'orange'}
console.log("New fruits: ", newFruits)
console.log("Modified fruits: ", {...fruits, b: 'blueberry'})

```

### ReduxStore - restocking the store
Here we will be dynamically modifying the quantity state store variable to handle order/restock scenarios
```
$ node index
Initial store  { numOfCakes: 10, numOfBiscuits: 20 }
update state  { numOfCakes: 9, numOfBiscuits: 20 }
update state  { numOfCakes: 11, numOfBiscuits: 20 }
update state  { numOfCakes: 10, numOfBiscuits: 20 }
update state  { numOfCakes: 9, numOfBiscuits: 20 }
```

### Redux helper function
Alternative way to bind actions ....
```
const bindActionCreators = redux.bindActionCreators

...
const actions = bindActionCreators({ orderCake, restockCake}, store.dispatch)

actions.orderCake()
actions.restockCake(3)


```


### Multiple reducers
What if we have to state variables that we need to modify? How will we tackle such situation? You can create multiple reducers, but then you will need to combine them as create store can only have one reducer.

```
Initial store  { cake: { numOfCakes: 10 }, biscuit: { numOfBiscuits: 20 } }
update state  { cake: { numOfCakes: 9 }, biscuit: { numOfBiscuits: 19 } }
update state  { cake: { numOfCakes: 12 }, biscuit: { numOfBiscuits: 22 } }
update state  { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 21 } }
update state  { cake: { numOfCakes: 13 }, biscuit: { numOfBiscuits: 23 } }
```


### Nested objects and updating states
In this example, we will see how we go about updating the nested objects in redux and the points that we need to consider when the objects become complex.

```
Initial store  {
  name: 'Kurinchi',
  address: { street: '123 main street', city: 'abc city', country: 'US' }
}
updated state  {
  name: 'Kurinchi',
  address: { street: '345 Front Street', city: 'abc city', country: 'US' }
}
```

We will use immer library to handle nested object changes elegantly. Immer simplifies handling immutable data structure and works very well with redux. 
```
$ npm install immer
```


### Middleware
* It is a suggested way to extend Redux with custom functionality
* Provides 3rd party extension point between dispatching an action, and the moment it reaches the reducer
* Use middleware for logging, crash reporting, peforming asynchronous tasks etc. 
* We will redux-logger library for this
```
$ npm install redux-logger

@ Below is the output from middleware.js. Previous state, action and next state is registered and is displayed

 action CAKE_ORDERED @ 22:11:39.589
   prev state { cake: { numOfCakes: 10 }, biscuit: { numOfBiscuits: 20 } }
   action     { type: 'CAKE_ORDERED', quantity: 1 }
   next state { cake: { numOfCakes: 9 }, biscuit: { numOfBiscuits: 19 } }
 action CAKE_RESTOCKED @ 22:11:39.592
   prev state { cake: { numOfCakes: 9 }, biscuit: { numOfBiscuits: 19 } }
   action     { type: 'CAKE_RESTOCKED', quantity: 3 }
   next state { cake: { numOfCakes: 12 }, biscuit: { numOfBiscuits: 22 } }
 action CAKE_ORDERED @ 22:11:39.594
   prev state { cake: { numOfCakes: 12 }, biscuit: { numOfBiscuits: 22 } }
   action     { type: 'CAKE_ORDERED', quantity: 1 }
   next state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 21 } }
 action CAKE_RESTOCKED @ 22:11:39.595
   prev state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 21 } }
   action     { type: 'CAKE_RESTOCKED', quantity: 2 }
   next state { cake: { numOfCakes: 13 }, biscuit: { numOfBiscuits: 23 } }


```


### Asynchronous actions
* As soon as an action was dispatched, the state was immediately updated
* If you dispatch the CAKE_ORDERED action, the numOfCakes was right away decremented by 1
* Asynchronous Actions are API calls to fetch data from an end point and use that data in your application
```
@ STATE
state = {
    loading: true,
    data: [],
    error: ''
}

@ACTION
FETCH_USERS_REQUESTED - Fetch list of users
FETCH_USERS_SUCCEEDED - Fetched successfully
FETCH_USERS_FAILED - Error when fetching the data

@REDUCERS
case: FETCH_USERS_REQUESTED
    loading: true

case: FETCH_USERS_REQUESTED
    loading: false
    users: data from API

case: FETCH_USERS_REQUESTED
    loading: false
    error: error from API

```

* Async action creators
  * axios - requests to an API endpoint
  * redux-thunk - define async action creators, middleware

```
$ npm i axios
$ npm i redux-thunk
$ node asyncActions.js

@output
{ loading: true, users: [], error: '' }
{
  loading: false,
  users: [
    'Leanne Graham',
    'Ervin Howell',
    'Clementine Bauch',
    'Patricia Lebsack',
    'Chelsey Dietrich',
    'Mrs. Dennis Schulist',
    'Kurtis Weissnat',
    'Nicholas Runolfsdottir V',
    'Glenna Reichert',
    'Clementina DuBuque'
  ],
  error: ''
}
```

### Redux concerns and redux-toolkit library
* Redux requires too much boiler plate code
  * action
  * action object
  * action creator
  * switch statement in a reducer
* A lot of packages have to be installed to work with redux
  * redux-thunk
  * immer
  * redux-devtools
* There was a need to improve the dev experience for redux
* Redux toolkit is the official opinionated batteries-included toolset for efficient Redux development
  * Abstract over the setup process
  * handle the most common usecases
  * includes some useful utilities
* Project setup
  * 01 - Initialize the STATE
  * 02 - Create a FEATURE SLICE using feature slice function which generates the actions and reducers
  * 03 - Peform DIRECT MUTATIONS on the state (with immer under the hood)
  * 04 - Create a STORE and attach the REDUCER
  * 05 - DISPATCH an action
  * 06 - LISTEN to changes using store.subscribe() function
  * 07 - INSPECT the state using store.getState()
```
* Create a new folder rtk-demo and go inside the folder
$ npm init --yes
$ npm i @reduxjs/toolkit

* Create the opinionated folder structure
- rtk-demo
----@app
------+ store.js
----@features
------@biscuits
------@cake

Initial state  { cake: { numOfCakes: 10 }, biscuit: { numOfBiscuits: 15 } }
Update state { cake: { numOfCakes: 9 }, biscuit: { numOfBiscuits: 15 } }
Update state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 15 } }
Update state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 14 } }
Update state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 13 } }
Update state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 14 } }

```

### Redux logger with redux-toolkit
```
$ npm i redux-logger

With the logger installed, make the necessary changes in store.js to include the logger library


Initial state  { cake: { numOfCakes: 10 }, biscuit: { numOfBiscuits: 15 } }
 action cake/ordered @ 23:41:56.557
   prev state { cake: { numOfCakes: 10 }, biscuit: { numOfBiscuits: 15 } }
   action     { type: 'cake/ordered', payload: undefined }
   next state { cake: { numOfCakes: 9 }, biscuit: { numOfBiscuits: 15 } }
 action cake/restocked @ 23:41:56.561
   prev state { cake: { numOfCakes: 9 }, biscuit: { numOfBiscuits: 15 } }
   action     { type: 'cake/restocked', payload: 2 }
   next state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 15 } }
 action biscuit/ordered @ 23:41:56.563
   prev state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 15 } }
   action     { type: 'biscuit/ordered', payload: undefined }
   next state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 14 } }
 action biscuit/ordered @ 23:41:56.565
   prev state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 14 } }
   action     { type: 'biscuit/ordered', payload: undefined }
   next state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 13 } }
 action biscuit/restocked @ 23:41:56.568
   prev state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 13 } }
   action     { type: 'biscuit/restocked', payload: 1 }
   next state { cake: { numOfCakes: 11 }, biscuit: { numOfBiscuits: 14 } }
```

### ASYNC actions with Redux Toolkit
* Will need axios library to call in external API's
* We make use of createAsyncThunk function which accepts action type as first argument and callback as the second argument. Callback function will contain the async logic and will return a promise. createAsyncThunk will dispatch the promise lifecycle actions which we can listen to using extraReducers
* Lifecycle includes pending (when request is made), fulfilled (when request succceed) and rejected (when there is error)
* Within each reducer function we can perform the necessary state transition
* Within the slice, export the reducer as the default export and fetchUsers function as the named export
* In store.js, attach the reducer to the store and in index dispatch the action
* createAsyncThunk under the hood makes uses of the redux-thunk library
* redux-thunk is applied as middleware to the store under the hood and everything else is abstracted. You can inspect the node_modules to see the libraries installed