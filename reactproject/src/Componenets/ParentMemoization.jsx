import React, { useState } from 'react'
import ChildOneMemoization from './ChildOneMemoization'

function ParentMemoization  ()  {
   let [count, setCount]=useState(0)
   let [count1, setCount1]=useState(0)
   let updateCounter=()=>{
      setCount(count+1)
   }

   let updateCount1=()=>
   {
      
      setCount1(count1+1)
   }

   console.log("Parent renderd")
  return (
    <div>
      <h1 style={{backgroundColor:"red"}} onClick={updateCounter}>Count:{count}</h1>
      <h1 style={{backgroundColor:"green"}} onClick={updateCount1}>Count:1{count1}</h1>

      <ChildOneMemoization/>
    </div>
  )
}

export default ParentMemoization
