
//* Destructruing Reactjs 
//* !at way

// import React from 'react'

// const Child = (props) => {
//   return (
//     <div>
//       <h1>{props.Name}</h1>
//       <h1>{props.Subject}</h1>
//     </div>
//   )
// }

// export default Child


//& Second way od Destructuring

// import React from 'react'

// const Child = (props) => {
//   let {Name, Subject} =props
//   return (
//     <div>
//       <h1>Name:{Name}</h1>
//       <h2>Subject:{Subject}</h2>
//     </div>
//   )
// }

// export default Child

//& 3 way od Destructuring

// import React from 'react'

// const Child = ({Name, Subject}) => {
//   return (
//     <div>
//      <h1>Name:{Name}</h1>
//       <h2>Subject:{Subject}</h2> 
//     </div>
//   )
// }

// export default Child


//^ 222222222222222222222222222222======================

/*
import React from 'react'

const Child = ({Increment, Decrement, reset}) => {
  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Drecment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Child
*/


//^ 1212121212121212112 12 12
/*
import React from 'react'

const Child = (props) => {

  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h2>Is:{props.isDefind}</h2>
      <h2>Skill:{props.skills}</h2>
      <h2>Name1:{props.courses.Name}</h2>
      <h2>Id1:{props.courses.Id}</h2>

      <ol>
        {props.courses.frontend.map((m)=>{
          console.log(m)
          return (<>
          
          <li>{m}</li>
          </>)

        })
        }
      </ol>

      <ol>
        {props.courses.backend.map((m)=>{
          console.log(m)
          return (<>
          
          <li>{m}</li>
          </>)

        })
        }
      </ol>


    </div>
  )
}

export default Child



*/

// ^000000000000000000000000000000000000000000000000000000000000000000000000000000000000
/*
import React from 'react'
import { PropTypes } from 'prop-types'
const Child = (props) => {
  return (
    <div>
      <h1>Name:{props.Name}</h1>
      <h2>ID:{props.id}</h2>
      <h2>IsMarrid:{props.isMarid}</h2>
      <h2>Skill:{props.skills}</h2>
      <h2>Courses:{props.courses.emp_name}</h2>
    </div>
  )
}

Child.propTypes = {
  Name:PropTypes.string,
  ID:PropTypes.number,
  isMarid:PropTypes.bool,
  Skill:PropTypes.array,
  courses:PropTypes.object
} 

export default Child

*/

//^0000000000000000000000000000000000000000000000000000000

/*
import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h1>id:{props.id}</h1>
      <hr />
      <h1>Name:{props.name}</h1>  
      <hr />
      <h1>age:{props.age}</h1>
    

    </div>
  )
}

Child.defaultProps = {
name:"ctet",
age:"23",
id:233,

}

export default Child

*/

//^ =============================================
/** 
import React, { useState } from 'react'
import { MyContext } from './MyContext.'

export const Child = () => {

  let[text, setText] = useState("hi")
  let[state, setState] = useState("Bas")


  return (
    <div>
      <MyContext.Provider value={{state, text, setState, setText}}></MyContext.Provider>
      
    </div>
  )


}

*/

//^ ===============Login and SignUp  page ====================


import React, { useState } from 'react'
import SignUp from './SignUp'

const Child = () => {
  let[isLoged, setLoged]= useState(true)
  let handleChange = () =>{
    setLoged(false)
  }

  let handleChange1 = () =>{
    setLoged(true)
  }
  return (
    <div>
      {isLoged ? <div style={{display:"flex",  flexDirection:"coloum", justifyContect:"center", alignItems:"center", gap:"20px"}}>

        <SignUp/>
        <h2>If you alredy SignUp, Click On Login button</h2>
        <button onClick={handleChange}>Login</button>
      </div>:
       <div style={{display:"flex",  flexDirection:"coloum", justifyContect:"center", alignItems:"center", gap:"20px"}}>
      {/* <Login/> */}
      <button onClick={handleChange1}>SignUp</button>
      </div>
      }
      
    </div>

  )
}

export default Child