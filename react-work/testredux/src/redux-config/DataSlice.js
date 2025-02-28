import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "DataSlice",
    initialState:{
        counter: 100,
        evenCounter: 0
    },
    reducers:{
        incrementCounter: (state,action)=>{
            state.counter = state.counter + 1;
        },
        decrementCounter: (state,action)=>{
            state.counter = state.counter - 1;
        },
        incrementEvenCounter: (state,action)=>{
            state.evenCounter = state.evenCounter + 2;
        },
        decrementEvenCounter: (state,action)=>{
            state.evenCounter = state.evenCounter - 2;
        },
        incrementByPayload: (state,action)=>{
            state.counter =  state.counter + action.payload;
        },
        decrementByPayload: (state,action)=>{
           state.counter = state.counter - action.payload;
        }

    }
});

export const {decrementByPayload,incrementByPayload,incrementCounter, decrementCounter, incrementEvenCounter,decrementEvenCounter} = slice.actions;
console.log(slice.actions);
export default slice.reducer;
console.log(slice.reducer);