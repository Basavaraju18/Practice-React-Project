import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useFecth(url){

   let [apiData, setApiData]=useState([]);
   let [isLoading, setIsLoading]=useState(true);
   let [isError, setIsError]=useState(false);

   let getStoreData=async()=>
   {
       try{
         let {data}=await axios.get(url);
         setApiData(data)
         setIsLoading(false)
         setIsError(false)
       }
       catch(err)
       {
         setIsLoading(false)
         setIsError(true)
       }
   }

   useEffect ( () =>
   {
      setIsLoading(true)
      getStoreData()
   }, [])

   return {apiData, isLoading, isError}

}

export {useFecth}