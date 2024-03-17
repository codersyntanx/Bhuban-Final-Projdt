import { Route, Routes } from 'react-router-dom';
import './App.css';
import Propsgetter from './Propsgetter';
import About from './About';
import { useState } from 'react';

function App() {
  const [name,setName]=useState("")
  const Gettingname = (nameof)=>{
    setName(nameof)
  }
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Propsgetter name={name}/>}/>
  <Route path='/about' element={<About Gettingname={Gettingname}/>}/>
</Routes>
    </div>
  );
}

export default App;
