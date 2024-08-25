import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { ordered,restocked } from './cakeSlice';

const CakeView = () => {
  const numOfCakes=useSelector((state)=>state.cake.numOfCakes)
  const dispatch=useDispatch()
  return (
    <div>
    <h2>No. Of Cakes- {numOfCakes}</h2>
    <button onClick={()=>dispatch(ordered())}>OrderCake</button>
    <br/>
    <br/>
    <button onClick={()=>(dispatch(restocked(2)))}>RestockCake</button>
    </div>
  )
}

export default CakeView