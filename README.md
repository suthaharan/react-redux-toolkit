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