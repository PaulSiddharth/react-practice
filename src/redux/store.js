// import {createStore} from "redux";

// const reducer = (state=0, action) => {
//     switch(action.type){
//         case "INCREMENT": return state+1;
//         case "DECREMENT": return state-1;
//         default: return state
//     }
// }

// export const store = createStore(reducer);

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create Slice (Reducer + Actions)
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state, action) => {
        console.log(action)
         state.count -= action.payload;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export const store = configureStore({ reducer: counterSlice.reducer });