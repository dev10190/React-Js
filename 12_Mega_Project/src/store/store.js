import {configureStore} from "@reduxjs/toolkit"
import authSlice from './authSLice'

const store = configureStore({
    reducer: {
        auth : authSlice,
    }
})

export default store;