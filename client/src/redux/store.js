//Setting up Redux

import { configureStore } from "@reduxjs/toolkit"
import  userReducer  from "./user"
import counterReducer from './counterSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer
    }
})