//import React from 'react'
import { useSelector } from "react-redux"
const BiscuitView = () => {
    const numOfBiscuits = useSelector((state) => state.biscuit.numOfBiscuits)
    return (
      <div>
          <h2> Number of biscuits - {numOfBiscuits}</h2>
          <button>Order biscuit</button>
          <button>Restock biscuit</button>
      </div>
    )
  }
  
  export default BiscuitView