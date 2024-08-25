const configureStore=require('@reduxjs/toolkit').configureStore
const cakeReducer=require('../features/cake/cakeSlice')
const icecreamReducer=require('../features/icecream/icecreamSlice')
// const reduxLogger=require('redux-logger')
const userReducer=require('../features/user/userSlice')

// const logger=reduxLogger.createLogger()

const store=configureStore({
    //attach reducer
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },

    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)//store has som middlewares phle se to just concat ur m/w with them

})

module.exports=store