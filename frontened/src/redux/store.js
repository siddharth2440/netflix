import {configureStore} from "@reduxjs/toolkit"
import listSlice from "../redux/slices/homeSlice.js"
import userSlice from "./slices/userSlice.js"
const store = configureStore({
    reducer:{
        list:listSlice,
        auth:userSlice
    }
})

export default store