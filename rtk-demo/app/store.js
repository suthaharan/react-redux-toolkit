const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const biscuitReducer = require('../features/biscuit/biscuitSlice')
const reduxLogger = require('redux-logger')
const { getDefaultMiddleware } = require('@reduxjs/toolkit')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        biscuit: biscuitReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store