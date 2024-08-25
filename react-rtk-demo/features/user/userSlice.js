import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
    loading: false,
    users: [],
    error: ''
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.data.map((user) => user.id)); // Mapping user IDs
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;  // Storing fetched user IDs
                state.error = '';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;
