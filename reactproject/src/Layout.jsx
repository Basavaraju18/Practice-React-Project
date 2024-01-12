import React from 'react'
import {Link} from 'react-router-dom'
import "./Global.css"

const Layout = () => {
  return (
   <section className='mainContainer'>
    <div className='Head'>
      <h1>TestYanthra</h1>
      <ul>
         <li>
         <Link to="/Home">Home</Link>
         </li>
              
         <li>
         <Link to="/Career">Career</Link>
         </li>

         <li>
         <Link to="/Service">Service</Link>
         </li>

         <li>
         <Link to="/ContactUs">ContactUs</Link>
         </li>
      </ul>
    </div>
    </section>
  )
}

export default Layout
