import { Route, Routes } from 'react-router-dom';
import './App.css';
import Propsgetter from './Propsgetter';
import About from './About';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const [name,setName]=useState("")
 const todo = useSelector(state =>state);
 const dispatch = useDispatch()
  return (
    <div className="App">
    
      

<Routes>
  <Route path='/' element={<Propsgetter name={name}/>}/>
  <Route path='/about' element={<About />}/>
</Routes>
    </div>
  );
}

export default App;
