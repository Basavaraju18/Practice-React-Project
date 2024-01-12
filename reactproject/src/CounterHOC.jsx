import { useState } from "react";



function CounterHOC(OrginalComponent, c)
{
   function NewComponent()
   {

   let [count, setCount]=useState(0);

   let incrementCounter= ()=>
   {
      setCount(count+c)
   }

   let decrementCount =()=>
   {
      setCount(count+c)
   }
   return(
      <>
      <OrginalComponent count={count} 
      incrementCounter={incrementCounter} 
      decrementCount={decrementCount}/>

      </>
      );
}
   return NewComponent
}
export default CounterHOC