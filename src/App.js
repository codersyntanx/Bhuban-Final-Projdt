import { Route, Routes } from 'react-router-dom';
import './App.css';
import Propsgetter from './Propsgetter';
import About from './About';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removetodo, toggletodo } from './redux/reducers';

function App() {
  const [addtodos,setAddtodos]=useState("")
 const dispatch = useDispatch()
 const todos = useSelector((state)=>state.todo)
const handletodo =()=>{
  if(addtodos.trim() !== ""){
    dispatch(addTodo(addtodos.trim()))
    setAddtodos("")
  }
}
const handletoggletodo = (id)=>{
  dispatch(toggletodo(id))
}
const handledeletetodo = (id)=>{
  dispatch(removetodo(id))
}
  return (
    <div className="App">
    
  

<Routes>
  <Route path='/' element={<Propsgetter />}/>
  <Route path='/about' element={<About />}/>
</Routes>
    </div>
  );
}

export default App;
