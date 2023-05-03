const configureStore = require('@reduxjs/toolkit').configureStore

const cakeReducer = require('../features/cake/cakeSlice')
const biscuitReducer = require('../features/biscuit/biscuitSlice')
const userReducer = require('../features/user/userSlice')

const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

// Create a STORE and attach the REDUCER
const store = configureStore({
    reducer:{
        cake: cakeReducer,
        biscuit: biscuitReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store