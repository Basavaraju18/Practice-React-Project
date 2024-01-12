import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

let initilizeState={
   newProducts:[],
   isError:false,
   isLoading:true
};


let productReducer=(currentState, action)=>
{
   console.log(currentState)
   switch(action.type)
   {
      case "FETCH_SUCCESS":return {...currentState, newProducts:action.payload, isLoading:false}
      case "FETCH_Error":return {...currentState, isError:true,  isLoading:false}

   
    default: return currentState
   }
}
function FakeStoreApiUserReducer() {

   let [products, productsDispatcher]=useReducer(productReducer, initilizeState);

   let getProducts=async()=>
   {
      try
      {
         let {data}=await axios.get("http://fakestoreapi.com/products");
         productsDispatcher({type:"FETCH_SUCCESS", payload:data})
      }
      catch(err)
      {
        productsDispatcher({type:"Fetch_error"})
      }
   }

   useEffect(()=>
   {
      getProducts();
   }, [])

  return (
    <div>
      
      <h1>{products}</h1>
      <h1 style={{color:"red"}}>{products.isError && "ERROR"}</h1>
      {}
      {products.newProducts?.map(({id, image})=>
      {
         return <img key={id} src={image} width="200px" height="200px" />
      }
      )}
    </div>
  )
}



export default FakeStoreApiUserReducer
