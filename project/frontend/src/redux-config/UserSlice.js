import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "UserSlice",
    initialState:{
        user: null,
        token: null,
        isLoggedIn: false
    },
    reducers:{
        setUser: (state,action)=>{
            console.log(action.payload);
            state.user = action.payload.user;
            delete state.user.password
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        unsetUser:(state,action)=>{
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        }
    }
});
export const {setUser, unsetUser} = slice.actions;
export default slice.reducer;