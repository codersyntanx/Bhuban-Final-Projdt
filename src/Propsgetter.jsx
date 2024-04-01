import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removetodo, toggletodo } from './redux/reducers';
import { Modal } from "antd";
function Propsgetter (props){
    const [addtodos,setAddtodos]=useState("")
    const [ismodalopen,setIsmodalopen]=useState(false)
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
    return(
        <>
                    
      <h1>TODO LIST</h1>
<input type='text' className="inputtake" value={addtodos} onChange={(e)=>{setAddtodos(e.target.value)}}
placeholder='Add your work...'></input>
<button className="addtodobtn" onClick={handletodo}>Add Todo</button>

    <ul>
  {
    todos.map((item)=>{
      return(
        <>
        <div className="coverofli">
        <li className='cover' key={item.id}      style={{textDecoration:item.done? "line-through":"none"}}
     
>
    <div style={{display:"flex",gap:"10px"}}>
         <div className="coveroficon" onClick={()=>{handledeletetodo(item.id)}}>
         <i class="fa-regular fa-circle-xmark"></i>
    </div>

    <div className="item">
         {item.text}
    </div>
    </div>
    <div onClick={()=>handletoggletodo(item.id)} >
        {
            item.done?(<><i class="fa-regular fa-circle-check"style={{color:"green"}}></i></>):(<><i class="fa-regular fa-circle" ></i></>)
        }
    </div>
   
 
  {/* <button >  Delete the item</button> */}
  {/* <button   onClick={()=>handletoggletodo(item.id)} >
    {
      item.done?(<>  Mark as Undone</>):(<>Mark as done</>)
    }
  </button> */}
        </li>
        </div>
        </>
      )
    })
  }

</ul>
<Modal>

</Modal>

        </>
    )
}
export default Propsgetter