import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FetchSample() {

   let [user, setUser]=useState([]);


   async function getUserData()
   {
      let {data}=await axios.get("http://api.github.com/users")
      setUser(data);
   }
   useEffect( ()=>
   {
      getUserData()
   }, [])

   console.log("hi")
  return (
    <div>
      <ul>
         {user.map(({id, avatar_url })=>
         {
            return <li key={id}>
               <img style={{margin:"20px"}} height="200px" width="200px" src={avatar_url} alt="" />
            </li>
         })}
      </ul>
    </div>
  )
}

export default FetchSample
