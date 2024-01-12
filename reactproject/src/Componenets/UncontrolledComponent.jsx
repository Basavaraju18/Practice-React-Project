import React, { useRef } from 'react'

function UncontrolledComponent() {
// it will use refrence
   let usernameRef=useRef()
   let passwordRef=useRef()

   let getFormData=(e)=>
   {
      e.preventDefault();

      let u=usernameRef.current.value
      let p=passwordRef.current.value
      console.log(u, p)
   }
   console.log("UnControlled Comonenet")
  return (
    <div>
      <h1> UncontrolledComponent</h1>
      <form onSubmit={getFormData}>
         <input type="text" name="username" ref={usernameRef} />
         <hr />
         <input type="password" name="password" ref={passwordRef} />
         <hr />
         <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default UncontrolledComponent
