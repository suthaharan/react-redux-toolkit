const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../cake/cakeSlice').cakeActions

const initialState = {
    numOfBiscuits: 15
}

const biscuitSlice = createSlice({
    name: 'biscuit',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfBiscuits--;
        },
        restocked: (state, action) => {
            state.numOfBiscuits += action.payload
        },
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfBiscuits--
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfBiscuits--
        })
    },
})

module.exports = biscuitSlice.reducer
module.exports.biscuitActions = biscuitSlice.actions