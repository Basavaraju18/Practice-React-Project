// import React, { useEffect, useState } from 'react'

// let UseEffectHook = () => {
//    let[count, setCount]=useState(0);
//    let[count2, setCount2]=useState(5);

//    useEffect( ()=>
//    {
//       console.log("useEffect");
//       document.body.style.backgroundColor="green"

//       return( ()=>
//       {
//          document.body.style.backgroundColor="red"

//       })
//    },[count])

//    let updateCount2=()=>
//    {
//       setCount2(count2+5);
//    }

//    let updateCount=()=>
//    {
     
//       setCount(count+1)
//    }

//    console.log("renderd");

//   return (
//    <section>
//       <div>
//       <h1>Count:{count}</h1>
//       <button onClick={updateCount}>Update</button>
//       <h1>Count2:{count2}</h1>
//       <button onClick={updateCount2}>Update</button>
//       </div>
//    </section>
   
//   )
// }

// export default UseEffectHook

//^==========================useEffectHook using cleanup code to renove the component
import React, { useEffect, useState } from 'react'

function UseEffeectHook  ()  {
   let [count, setCount]=useState(0);
   let [count1, setCount1]=useState(5);


   useEffect( ()=>
   {
      let intarval=setInterval( ()=>
      {
         updatCountr()
      }, 1000)

      //! Cleanup Code
      return ()=>
      {
         clearInterval(intarval)
      }
   },)

   let updatCountr= ()=>
   {
    setCount(count+1);
      console.log("Counter Update")
   }
 
   let updateCounter1=()=>
   {
      setCount1(count1+3);
   }

  return (
   <section>
          <div>
          <h1>Count:{count}</h1>
          <button onClick={updatCountr}>Update</button>
          <h1>Count2:{count1}</h1>
            <button onClick={updateCounter1}>Update</button>
          </div>
       </section>
  )
}

export default UseEffeectHook