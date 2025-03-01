import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const store = configureStore({
    reducer:{
        ProductData: ProductSlice
    }
});

export default store;