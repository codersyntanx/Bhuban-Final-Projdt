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
    
      <h1>TODO LIST</h1>
<input type='text' value={addtodos} onChange={(e)=>{setAddtodos(e.target.value)}}
placeholder='Add your work...'></input>
<button onClick={handletodo}>Add Todo</button>

<ul>
  {
    todos.map((item)=>{
      return(
        <>
        <li className='cover' key={item.id}      style={{textDecoration:item.done? "line-through":"none"}}
     
>
  {item.text}
  <button onClick={()=>{handledeletetodo(item.id)}}>  Delete the item</button>
  <button   onClick={()=>handletoggletodo(item.id)} >
    {
      item.done?(<>  Mark as Undone</>):(<>Mark as done</>)
    }
  </button>
        </li>
      
        </>
      )
    })
  }
{/* {
  todos.map((todo)=>{
    return(
      <>
      <li 
      key={todo.id}
      style={{textDecoration:todo.done? "line-through":"none"}}
      onClick={handletoggletodo(todo.id)}
      >

      </li>
      
      </>
    )
  })
} */}
</ul>

<Routes>
  <Route path='/' element={<Propsgetter />}/>
  <Route path='/about' element={<About />}/>
</Routes>
    </div>
  );
}

export default App;
