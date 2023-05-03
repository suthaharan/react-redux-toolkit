
import { createSlice,  createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// Initialize the STATE
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Generates pending, fulfilled and rejected action types
// for creation and dispatching of user actions
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data.map((user) => user.id))
})

// Create a FEATURE SLICE using feature slice function which generates the actions and reducers
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

// export reducer and async function
export default userSlice.reducer