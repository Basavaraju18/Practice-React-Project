import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchingGitHubUser = () => {

   let[user, setUser]=useState([]);
   let [isLoading, setIsloading]=useState(true)
   let [isError, setIsError]=useState(false)

   // useEffect( ()=>
   // {
   //    let gitUsers=fetch("http://api.github.com/users");

   //    gitUsers.then( (res)=>{
   //       return res.join()
   //    })
   //    .then((apiData) =>{
   //       setUser(apiData)
   //    })
   // },[])

   //^ fetching the data using aync and await

   // useEffect( ()=>
   // {
   //    async function gitUsersData()
   //    {
   //       let gitUsers = await fetch("http://api.github.com/users");
   //       gitUsers= await gitUsers.json();
   //       console.log(gitUsers)
   //       setUser(gitUsers)
   //    }

   //    gitUsersData()
   // },[])

   //^ 3rd for the Loadung sysmbol and Error information is the Ui


   useEffect( ()=>
   {
      getGitUserData()
   }, [])

   async function getGitUserData()
   {
      try{
         let {data}=await axios.get("http://api.github.com/users")
         setUser(data);
         setIsloading(false)
         setIsError(false)
      }
      catch(err){  
         setIsError(true);
         setIsloading(false)
      }

   }
  return (
    <div>
      <ul>
         {user.map(({id,avatar_url})=>
         {
            return <li key={id}> 
            <img style={{margin:"20px"}} 
            hight="200px" width="200px" 
            src={avatar_url} alt="avatar_url" />
            </li>
         })}


      </ul>
    </div>
  )
}

export default FetchingGitHubUser