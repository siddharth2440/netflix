import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance.js";
import toast from "react-hot-toast";
import axios from "axios";

const initialState = {
    lists : [],
    detailsMovie:{}
}

export const homeSlice = createAsyncThunk('/home',async ({type,genre})=>{
    try {
        console.log(type);
        console.log(genre);
        const res = axiosInstance.get(`/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`)
        toast.promise(res,{
            success:"All Shows are there",
            loading:"Wait a Sec",
            error:"Can't able to fetch the movies"
        })
        return (await res).data
    } catch (error) {
        console.log(error);
    }
})

export const movieDetailsSlice = createAsyncThunk('/home/findMovie',async ({id})=>{
    try {
        const res = axiosInstance.get(`/movies/detailsMovie/${id}`)
        return (await res).data.getMovieInfo
    } catch (error) {
        console.log("Error in getting the movie Details");
    }
})

const listSlice = createSlice({
    name:"list",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(homeSlice.fulfilled,(state,action)=>{
            state.lists = action.payload.list;
        }),
        builder.addCase(movieDetailsSlice.fulfilled,(state,action)=>{
            // console.log(action.payload);
            state.detailsMovie = {...action.payload}
        })
    }
})

export default listSlice.reducer;