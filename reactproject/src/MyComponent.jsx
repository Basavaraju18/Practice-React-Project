import React, { useContext } from 'react'
import { MyContext } from './MyContext.'

const MyComponent = () => {

   let {text, setText } = useContext (MyContext)

   let {state, setState } = useContext (MyContext)

   let ChaneState  = () => {
      setState((document.body.style.background="red"))
      setText(("Hi i am Bas"))
   }

   let ChaneState1  = () => {
      setState((document.body.style.background="yellow"))
      setText(("Hi i am Raj18"))
   }



  return (
    <div>
      <h1>
         {text}
      </h1>
      <button onClick={ChaneState}>Next</button>
      <button onClick={ChaneState1}>Previous</button>
    </div>
  )
}

export default MyComponent