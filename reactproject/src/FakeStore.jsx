
import Loader from "./Loader";
import { useFecth } from "./useFetch"

function FakeStore(){

   let {apiData, isLoading, isError}=useFecth("https://fakestoreapi.com/products")

   return (
      <div>
         <h1>{isLoading && <Loader/>}</h1>
         <h1>{isError && "Error"}</h1>

         {apiData.map(({id,image})=>
         {
            return <img key={id} src={image} width="200px" alt="Something Wrong"/>
         })}
      </div>
   )
}

export default FakeStore;