import {  createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({id: Date.now(),text:action.payload,done:false})
        },
        toggletodo :(state,action)=>{
            const todo = state.find(todo=>todo.id === action.payload)
            if(todo){
                todo.done = !todo.done
            }
        },
        removetodo:(state,action)=>{
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo,toggletodo,removetodo}=todoSlice.actions;
export default todoSlice.reducer