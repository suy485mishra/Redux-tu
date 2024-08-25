import {createSlice} from '@reduxjs/toolkit'
// import {cakeOrdered} from '../cake/cakeSlice'

const initialState={
    numOfIceCreams:20,
}
const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCreams--;
        },
        restocked:(state,action)=>{
           state.numOfIceCreams+=action.payload;
        }
    },
    //while cake ordered we also want to remove icecream 
    // extraReducers: (builder) => {
    //     builder.addCase(cakeOrdered, (state) => {
    //       state.numOfIceCreams--
    //     })
    //   }
})

export default icecreamSlice.reducer
export const{ordered,restocked}=icecreamSlice.actions
