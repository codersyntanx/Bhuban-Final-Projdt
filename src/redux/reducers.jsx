import {  createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({id: Date.now(),text:action.payload,completed:false})
        },
        toggletodo :(state,action)=>{
            const todo = state.find(todo=>todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        removetodo:(state,action)=>{
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

const {addTodo,toggletodo,removetodo}=todoSlice.actions;
export default todoSlice.reducer