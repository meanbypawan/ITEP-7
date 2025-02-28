import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import MessageSlice from "./MessageSlice";


const store = configureStore({
    reducer:{
        DataCounter: DataSlice,
        WishingMessages: MessageSlice
    }
});

// DataCounter: {counter: 100,evenCounter: 0}
// WishingMessages: {m1:"GM",m2:"GN",m3:"GE"}
export default store;