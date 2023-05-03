const createSlice = require('@reduxjs/toolkit').createSlice

// Initialize the STATE
const initialState = {
    numOfCakes: 10
}

// Create a FEATURE SLICE using feature slice function which generates the actions and reducers
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        // Peform DIRECT MUTATIONS on the state (with immer under the hood)
        ordered: (state) => {
            state.numOfCakes--;
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions