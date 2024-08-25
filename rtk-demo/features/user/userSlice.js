const createSlice=require('@reduxjs/toolkit').createSlice

const createAsyncThunk=require('@reduxjs/toolkit').createAsyncThunk

const axios=require('axios')

const is={
    loading:false,
    users:[],
    error:''
}

const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
   return axios //dont forget return
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.data.map((user)=>user.id))
})

const userSlice=createSlice({
    name:'user',
    initialState:is,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
              state.loading=true
        }),
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading=false,
            state.users=action.payload,
            state.error=''

        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false,
            state.users=[],
            state.error=action.error.message
        })
    },
})

module.exports=userSlice.reducer
module.exports.fetchUsers=fetchUsers //. You're exporting it as userSlice.actions, but fetchUsers is not part of userSlice.actions; it's a separate async thunk. 