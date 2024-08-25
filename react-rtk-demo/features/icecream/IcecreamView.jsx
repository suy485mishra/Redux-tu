import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { ordered,restocked } from './icecreamSlice';
const IcecreamView = () => {
  const dispatch=useDispatch()
  const [val,setVal]=useState(0)
  const numOfIceCreams=useSelector((state)=>state.icecream.numOfIceCreams)
  return (
    <div>
    <h2>No. Of IceCreams-{numOfIceCreams}</h2>
    <button onClick={()=>dispatch(ordered())}>OrderIceCream</button>
        
    <br/>
    <br/>
    <input
      type='number'
      value={val}
      onChange={(e)=>setVal(parseInt(e.target.value))}
    />
    <button onClick={()=>(dispatch(restocked(val)))}>RestockIceCream</button>
    </div>
  )
}

export default IcecreamView