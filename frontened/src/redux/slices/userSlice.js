import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    user: {},
    role: "",
    isLoggedIn: false
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
    // console.log({avatar});
    console.log("logging the avatar");
    console.log(data.avatar);
    const updateRes = axiosInstance.put('/users/update',data,{
        headers:{"content":"multipart/formdata"}
    })
    toast.promise(updateRes,{
        success:"Updated",
        loading:"updating",
        error:"error in updating the profile data"
    })
    return (await res).data
})

export const fetchUser = createAsyncThunk("/users/getProfile",async ()=>{
    const res = axiosInstance.get('/users/me')
    return (await res).data.fetchUserDetails
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
        }),
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            localStorage.clear();
            // console.log("fetchUser Payload");
            // console.log(action.payload);
            localStorage.setItem("user",JSON.stringify(action?.payload))
            localStorage.setItem("role",action?.payload?.role)
            localStorage.setItem("isLoggedIn",true)
            state.user = action?.payload
            state.role = action?.payload?.role
            state.isLoggedIn = true
        })

    }
})

export default authSlice.reducer