//import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ordered, restocked } from "./biscuitSlice"

const BiscuitView = () => {
    const numOfBiscuits = useSelector((state) => state.biscuit.numOfBiscuits)
    const dispatch = useDispatch()
    return (
      <div>
          <h2> Number of biscuits - {numOfBiscuits}</h2>
          <button onClick={() => dispatch(ordered())}>Order biscuit</button>
          <button onClick={() => dispatch(restocked(2))}>Restock biscuit</button>
      </div>
    )
  }
  
  export default BiscuitView