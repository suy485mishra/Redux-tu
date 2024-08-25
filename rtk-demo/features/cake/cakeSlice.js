const createSlice=require('@reduxjs/toolkit').createSlice
const initialState={
    numOfCakes:10,
}

const cakeSlice=createSlice({
    name:'cake',
    initialState:initialState,//or just initialstate would also work as same name
    reducers:{
        ordered:(state)=>{//no need to pass action as we dont need
            state.numOfCakes--;
        },
        restocked:(state,action)=>{
            state.numOfCakes+=action.payload
        },
    },
})

module.exports=cakeSlice.reducer  //default exp
module.exports.cakeActions=cakeSlice.actions //module exp