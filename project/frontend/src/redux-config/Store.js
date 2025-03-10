import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../redux-config/UserSlice";
const store = configureStore({
    reducer:{
        User: UserSlice
    }
});

export default store;