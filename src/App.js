import { Route, Routes } from 'react-router-dom';
import './App.css';
import Propsgetter from './Propsgetter';
import About from './About';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/reducers';
import Counting from './Couting';

function App() {
  const [name,setName]=useState("")
  const Gettingname = (nameof)=>{
    setName(nameof)
  }
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <p>Count :{count}</p>
      <div className='d-flex gap-2'>
<button onClick={()=>dispatch(increment())}>+ increment</button>
      Count :{count}
      <button onClick={()=>dispatch(decrement())}>- decrement</button>
      </div> */}
      

<Routes>
  <Route path='/' element={<Propsgetter name={name}/>}/>
  <Route path='/about' element={<About Gettingname={Gettingname}/>}/>

  <Route path='/count' element={<Counting />}/>
</Routes>
    </div>
  );
}

export default App;
