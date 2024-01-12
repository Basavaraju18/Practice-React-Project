import React, { useState } from 'react'

function ControlledComponent() {
// it will use state
   let[loginForm, setLogingForm]=useState({userName:"", Password:""})

   let changeLoginForm=({target:{value, name}})=>
   {
      setLogingForm({...loginForm,[name]:value})
   }

   let getFormateData=(e)=>
   {
      // e.preventDefault();
      console.log(loginForm)
   }

   useState(null)
   console.log("Controlled renderd")
  return (

    <div>
      <h1>Controlled component</h1>
      <form onSubmit={getFormateData}>
         <input type="text" name="username" onChange={changeLoginForm} />
         <hr />
         <input type="password" name="password" onChange={changeLoginForm} />
         <hr />
         <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default ControlledComponent
