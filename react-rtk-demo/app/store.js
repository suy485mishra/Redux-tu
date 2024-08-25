import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'

// const reduxLogger=require('redux-logger')
import userReducer from '../features/user/userSlice'

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

export default store