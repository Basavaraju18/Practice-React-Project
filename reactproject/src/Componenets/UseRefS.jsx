// import React, { useRef } from 'react'

// function UseRefS() {

//    let inputRef=useRef("Bas")

//    console.log(inputRef)

//    let focusInput=()=>
//    {
//       inputRef.current.focus()
//    }

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={focusInput}>Focus</button>
//     </div>
//   )
// }

// export default UseRefS

//^ Printing userRef=======================================================


import React, { useRef } from 'react'

const UseRefS = () => {
   // let printRef=useRef()
   let btnRef=useRef()

   let printData=()=>
   {
      btnRef.current.style.display="none"
      window.print()
      btnRef.current.style.display="inline"
   }
  return (
    <div>
      <h1>Hiii</h1>
      <h1>Hiii</h1>
      <h1>Hiii</h1>
   <button onClick={printData} ref={btnRef}>print</button>
    </div>
  )
}

export default UseRefS
