import { createSlice } from "@reduxjs/toolkit";
console.log('counterslice......')
export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:1230
    },
    reducers:{
        increment: state=>{
            state.value+=1
        },
        decrement: state=>{
            state.value-=1
        },
        incrementByAmt: (state, action)=>{
            state.value+=action.payload
        }
    }

})

export const {increment, decrement, incrementByAmt} = counterSlice.actions;
export default counterSlice.reducer