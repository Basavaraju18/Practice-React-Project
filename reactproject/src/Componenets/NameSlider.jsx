// rafce reactArrowFunctionComponent
import React, {  useState } from 'react'
import "./CSS/NameSlider.css"

const NameSlider = ({Names}) => {
   const[currentIndex, setCurrentindex] = useState(0);

   const nextName=()=>
   {
      if(currentIndex===Names.length-1)
      {
         setCurrentindex(0);
      }
      else
      {
         setCurrentindex(currentIndex +1);
      }
   }

   const previousName=()=>
   {
      if(currentIndex===0)
      {
         setCurrentindex(Names.length-1);
      }
      else
      {
            setCurrentindex(currentIndex-1)
      }
   }
   
  return (
    <div className='imageSlider'>
      <button onClick={previousName}>Previous Name</button>
      <h1>Name:{Names[currentIndex]}</h1>
      <button onClick={nextName}>Next Name</button>
    </div>
  )
}

export default NameSlider
