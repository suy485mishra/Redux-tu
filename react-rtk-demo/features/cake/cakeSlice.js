import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCakes: 10,
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,  // Using shorthand since key and value names are the same
    reducers: {
        ordered: (state) => {
            state.numOfCakes--;  // Decrement the number of cakes
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload;  // Increment by the payload amount
        },
    },
});

// Default export for the reducer
export default cakeSlice.reducer;

// Named exports for the actions
export const { ordered, restocked } = cakeSlice.actions;
