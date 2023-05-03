const createSlice = require('@reduxjs/toolkit').createSlice

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
        }
    }
})

module.exports = biscuitSlice.reducer
module.exports.biscuitActions = biscuitSlice.actions