import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/reducers';
function Counting (){
    const count  = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();

    return(
        <>
        {count}
        <div className='d-flex gap-2'>
<button onClick={()=>dispatch(increment())}>+ increment</button>
      Count :{count}
      <button onClick={()=>dispatch(decrement())}>- decrement</button>
      </div> 
        </>
    )
}
export default Counting;