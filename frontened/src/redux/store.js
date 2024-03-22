import {configureStore} from "@reduxjs/toolkit"
import listSlice from "../redux/slices/homeSlice.js"
const store = configureStore({
    reducer:{
        list:listSlice
    }
})

export default store