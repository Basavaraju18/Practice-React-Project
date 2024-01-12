import Loader from "./Loader";
import { useFecth } from "./useFetch";

function GitHubUser(){

   let {apiData,isError,isLoading}=useFecth("https:api.github.com/users")

   return(
      <div>
         <h1>{isLoading && <Loader/>}</h1>
         <h1>{isError && "Error"}</h1>
         <ul>
            {
               apiData.map( ({id, avatar_url})=>
               {
                  return <li key={id}>
                     <img style={{margin:"20px"}} height="200px" width="200px" src={avatar_url} alt="" />
                  </li>
               })
            }
         </ul>
      </div>
   )
}

export default GitHubUser