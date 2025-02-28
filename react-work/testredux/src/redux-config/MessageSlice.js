import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "MessageSlice",
    initialState:{
        m1: "GM..",
        m2: "GN..",
        m3: "GE.."
    }
})

export default slice.reducer;