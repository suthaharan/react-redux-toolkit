const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const biscuitReducer = require('../features/biscuit/biscuitSlice')

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        biscuit: biscuitReducer,
    }
})

module.exports = store