import { configureStore } from '@reduxjs/toolkit'

import cakeReducer  from '../features/cake/cakeSlice'
import biscuitReducer from '../features/biscuit/biscuitSlice'
import userReducer from '../features/user/userSlice'

import reduxLogger from 'redux-logger'

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

export default store