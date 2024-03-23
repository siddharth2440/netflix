import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    user:localStorage.getItem("user") || {},
    role:localStorage.getItem("role") || "",
    isLoggedIn:localStorage.getItem("isLoggedIn") || false
}

export const login = createAsyncThunk('/auth/login',async ({email,password})=>{
    try {
        // console.log("Hello World");
        // console.log(email);
        // console.log(password);
        const loginAccount = axiosInstance.post('/users/login',{email,password})
        toast.promise(loginAccount,{
            success:"LoggedIn Successfully",
            loading:"Logging in",
            error:"Invalid Details"
        })

        return (await loginAccount).data
    } catch (error) {
        console.log(error);
    }
})

export const logout = createAsyncThunk('/auth/logout',async ()=>{
    // console.log("Loggingout");
    const logoutAccount = axiosInstance.get('/users/logout')
    toast.promise(logoutAccount,{
        success:"Logout Successfully",
        loading:"logout",
        error:"Error in logging out the Account"
    })
})

export const updateProfile = createAsyncThunk('auth/profile/update',async (data)=>{
    console.log(data);
    const updateRes = axiosInstance.put('/users/update',data)
    toast.promise(updateRes,{
        success:"Updated",
        loading:"updating",
        error:"error in updating the profile data"
    })
    return (await res).data
})



const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            console.log("payload");
            console.log(action.payload.isFound);
            localStorage.setItem("role",action.payload.isFound?.role)
            localStorage.setItem("user",JSON.stringify(action.payload))
            localStorage.setItem("isLoggedIn",true)
            state.isLoggedIn = true;
            state.user = action.payload.isFound,
            state.role = action?.payload?.isFound?.role
        }),
        builder.addCase(logout.fulfilled,(state,action)=>{
            localStorage.clear()
            state.isLoggedIn = false,
            state.user={},
            state.role=""
        })

    }
})

export default authSlice.reducer