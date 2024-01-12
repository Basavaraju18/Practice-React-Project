

import { number } from 'prop-types'
import React from 'react'

const SignUp = () => {

   let[state, setState] = ({firstname:"", lastNname:"", email:"", password:"", loading:false })

   let HandleSubmit = (e) => {
      e.preventDefault()

      try{
         setState({loading: true})

         if(firstname=="" || lastNname=="" || number=="" || password=="" || confirmPassword=="" || email=="" ){
            alert("please provide your details")

         }else if(password==confirmPassword){
            if(firstname !="" && lastNname!="" && number!="" && email!="" && confirmPassword!=""){
               alert("Registration Successful")
               console.log({firstname, lastNname, number, email, password, confirmPassword})
               console.log("username", email)
               console.log("password", password)
            }else{
               alert("please provide your credentials")
               }
         }else{
            alert("PASSWORDD DOES NOT MATCH")
         }
      }catch(error){
         console.log(error)
      }
   }
  return (
    <div>SignUp</div>
  )
}

export default SignUp