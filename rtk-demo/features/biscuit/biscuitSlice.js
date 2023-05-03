const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../cake/cakeSlice').cakeActions

const initialState = {
    numOfBiscuits: 15
}

// Invoke the function and assign the return value
const biscuitSlice = createSlice({
    name: 'biscuit', // name for the slice
    initialState, // add initial state for the slice
    reducers: {
        // define the reducer mapping
        ordered: (state) => {
            state.numOfBiscuits--;
        },
        restocked: (state, action) => {
            state.numOfBiscuits += action.payload
        },
    },
    // BUY a Cake and get a Biscuit FREE
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfBiscuits--
    //     }
    // },
    // USING A BUILDER 
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfBiscuits--
        })
    },
})

module.exports = biscuitSlice.reducer
module.exports.biscuitActions = biscuitSlice.actions