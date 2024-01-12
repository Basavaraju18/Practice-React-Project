import React, { useState } from 'react'
import './CSS/ImageSlider.css'


const ImageSlider=({images})=> {
   const[currentindex, setCurrentIndex] = useState(0);

   const nextSlide=()=>
   {
      if(currentindex===images.length-1){
         setCurrentIndex(0);

      }else{
        setCurrentIndex(currentindex +1);
      }      
   }
   const previousSlide=()=>{
      if(currentindex===0){
         setCurrentIndex(images.length-1);
      }else{
        setCurrentIndex(currentindex-1);
      }
   } 
  return (
    <div>
      <div className='imageslider'>
         <button onClick={previousSlide}>previous</button>
         <img src="{images[currentindex]}" alt={`
          ${currentindex}`} />
         <button onClick={nextSlide}>Next</button>

      </div>
    </div>
  )
}

export default ImageSlider
