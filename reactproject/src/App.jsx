/*import React from 'react'
 const App= () =>{
    return (
        <div  style={{color:"red" ,border:"2px solid green"}}>
           <h1>Name:Manoj</h1>
           <p>hi I am Manoj</p>
           <button>Click here</button>
        </div>
    )
 }
 export default App*/

//legacy method to create a react element


/*
import React from 'react'
 
const App = () => {
  return React.createElement("div",{style :{color:"red",border :"2px solid red",
width:"200px",display:"flex",alignItems:"center"}},
React.createElement("div",{id:"div1"},"Man"),
React.createElement("h1",{id:"div1"},"Manoj1")
)
}
export default App
*/

// ^ Class bassed components 11111111111111111111111111111111111111111111111111111111111111111
/*
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Name: Basavaraju DS</h1>
        <h1>Age:22</h1>
        <h1>Place :Mandya</h1>
        <h1>Using Functional based way</h1>
      </div>
    )
  }
}
*/

// ^ Funtional based Components 222222222222222222222222222222222222222222222222222222222222222

/*
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Name: Basavaraju DS</h1>
        <h1>Age:18</h1>
        <h1>Place :Mandya</h1>
        <h1>Using Functional based way</h1>
    </div>
  )
}

export default App

*/


//^ 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
/*
import React, { Component } from 'react'

import "./Global.css"
export default class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         employe:[
         {
            emp_Name:"Arun",
            emp_id:101,
            emp_sal:10000,
            emp_City:"Banglore"
         },
         {
            emp_Name:"kiran",
            emp_id:102,
            emp_sal:10000,
            emp_City:"Banglore"
         },
         {
            emp_Name:"Varun",
            emp_id:103,
            emp_sal:10000,
            emp_City:"Banglore"
         },
         {
            emp_Name:"Tarun",
            emp_id:104,
            emp_sal:10000,
            emp_City:"Mandya"
         },
      ]
      }
      
   }
  render() {
    return (
     <section>
      <table>
         <thead>
            <th>Emp_Name</th>
            <th>Emp_Id</th>
            <th>Emp_Sal</th>
            <th>Emp_City</th>
         </thead>
         <tbody>
            {this.state.employe.map((m) =>{
                  console.log(m)
                  return (<>
                  <tr>
                     <td>{m.emp_Name}</td>
                     <td>{m.emp_id}</td>
                     <td>{m.emp_sal}</td>
                     <td>{m.emp_City}</td>

                  </tr>
                  </>)
               }
            )
            }
         
         </tbody>
      </table>
     </section>
    )
  }
}

*/
//^ 444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444

/*
import React, { useState } from 'react'

function App() {
   let [name, setName] = useState("JavaScript")
   let ChangeName = ()=>{
      setName("ReactJs")
   }

   let ChangeName1 = ()=>{
      setName("JavaScript")
   }
  return (
    <div>
      <h1 style={{color:"red"}}>{name}</h1>
      <button onClick={ChangeName}style={{color:"blue", backgroundColor:"pink", width:"100px"}}>Next</button>
      <button onClick={ChangeName1} style={{color:"green", backgroundColor:"orange", width:"100px"}}>Previous</button>
    </div>

  )
}

export default App

*/


//^ 6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
/*

import React, { useState } from 'react'

const App = () => {

   let [name, setName] = useState({Name : "Bas", id: 18})

   let ChangeName1 = ()=>{
      setName({Name:"Bas", id:18})
   }

   let ChangeName = ()=>{
      setName({Name:"Basavaraj", id:4})
   }

   
  return (
    <div>
      <h1>{name.Name}</h1>
      <h1>{name.id}</h1>
      <button onClick={ChangeName}>Previous</button>
      <button onClick={ChangeName1}>Next</button>
    </div>
  )
}

export default App


*/

// ^ 777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

/*
import React, { useState } from 'react'

const App = () => {
   let [count, setCount] = useState(0);
   let increment = () =>{
      setCount(count +1);
   };
   let decrement  = () =>{
      setCount(count -1);
   };

   let reset = () =>{
      setCount(0);
   };

   let getcolor = () =>{
      if(count >0){
         return "green";
      }
      else if(count < 0){
         return "red";
      }
      else{
         return "hotpink"
      }
   };
  return (
    <div>
      <h1 style={{color:getcolor(count) }}>{count}</h1>
      <button onClick={decrement}style={{color:"blue", backgroundColor:"red", width:"100px"}}>Decrement</button>
      <button onClick={increment}style={{color:"blue", backgroundColor:"green", width:"100px"}}>Increment</button>
      <button onClick={reset} style={{color:"blue", backgroundColor:"orange", width:"100px"}}>Reset</button>
    </div>
  );
};

export default App

*/
//^    8888888888888888888888888888888888888888888888888888888888888888888888888888

// import React from 'react'
// import Child from './Child'

// const App = () => {
//   return (
//     <div>
//       <Child >Name:"Bas", Subject:"Subject"</Child>
//     </div>
//   )
// }

// export default App


//^  9999999999999999999999999999999999999999999999999999999


// import React, { useState } from 'react'
//  import Child from './Child'

// const App = () => {
//    let [count, setCount] =useState(0)

//    let Increment = () =>{
//       setCount(count+1)
//    }

//    let Decrement = () =>{
//       setCount(count-1)
//    }

//    let reSet = () =>{
//       setCount(0)
//    }

//   let getColor = () =>{
//     if(count >0){
//       return "green";
//     }
//     else if(count<0){
//       return "red";
//     }
//     else{
//       return "blue";
//     }
//    };


//   return (
//     <div>
//       <h1 style={{color:getColor(count) }}>{count}</h1>

//       <Child Increment={Increment}> Decrement={Decrement} Reset={reSet}</Child>
//     </div>
//   )
// }

// export default App

//^ 1010101010101010101010101010110101101010101010
/*
import { faker } from '@faker-js/faker'
import React, { useState } from 'react'

const App = () => {

   let [state, setState] = useState(faker.image.city())
   let [value, setValue] =  useState()
   let ChangeName =()=>{
      setValue(faker.name.fullName())
   }
   let ChangeImage= ()=>{
      setState(faker.image.avatar());
   }
  return (
    <div>
      <h1>{value}</h1>
      <img src={state} alt="hello" />
      <button onClick={ChangeImage}>ChangeImage</button>
      <button onClick={ChangeName}>ChangeName</button>
    </div>
  )
}

export default App

*/
//^ child to parent================================
//^ how to pass object and values from chid to parent

/*

import React from 'react'
import Child from './Child'

const App = () => {
  return (
    <div>
      <Child 
      name="Bas"
      isDefind="true"
      skill={["HTML, CSS, JavaScript"]}
      courses={{
         Name:"Bas",
         Id:18,
         frontend:["HTML", "CSS", "JavaScript"],
         backend:["jAva", "SQL", "Python"]
      }}
      />
      
    </div>
  )
}

export default App

*/


//^ ==12 12 12 12 1 2 12 ===============================
/*
import React from 'react'
import Child from './Child'

const App = () => {
  return (
    <div>
      <Child
      Name="Bas"
      id={18}
      isMarid={true}
      skills={["HTML", "CSS"]}
      courses={{emp_name:"Arun", id:22}}
      />
    </div>
  )
}

export default App
*/

//^ 00000000000000000000000000000000 0000000000

/** 
import React from 'react'
import Child from './Child'

const App = () => {
  return (
    <div>
      
      <Child
      name="Bas1" id="123"
      />

      <Child
      name="Bas2" id="124"
      />

   <Child
      name="Bas3" age="32"
      />

    </div>
  )
}

export default App
*/
//^ Binding in  React js ====================================================
/**
import React, { Component } from 'react'

export default class App extends Component {
constructor(props){
   super(props)

   this.state ={
      count:0
   }
   this.Increment = this.Increment.bind(this)
}
Increment(){
   this.setState({count:this.state.count+1})
}

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment}>onclick</button>
      </div>
    )
  }
}

 */

//^ 2nds way of Binding in  React js ================================================

/** 
import React, { Component } from 'react'

export default class App extends Component {

   constructor(props){
      super(props)
   
      this.state ={
         count:0
      }
   }

   Increment(){
      this.setState({count:this.state.count+1})
   }

  render() {
    return (
      <div>
         <h1>{this.state.count}</h1>
        <button onClick={()=>this.Increment()}>onclick1</button>
      </div>
    )
  }
}

*/

//^==============================================================================
 // ^b #rd way to fbind the this keyword theae are the example of class based keyword

 /** 
import React, { Component } from 'react'

export default class App extends Component {

   constructor(props){
      super(props)
   
      this.state ={
         count:0
      }
   }

   Increment(){
      this.setState({count:this.state.count+1})
   }

  render() {
    return (
      <div>
         <h1>{this.state.count}</h1>
        <button onClick={this.Increment.bind(this)}>Clickkkkkk</button>
      </div>
    )
  }
}

*/
//^ 4th way of binding =====================================================
//^ rcc based evevt
/** 
import React, { Component } from 'react'

export default class App extends Component {

   constructor(props){
      super(props)
   
      this.state ={
         count:0
      }
   }

   Increment = () =>{
      this.setState({count:this.state.count+1})
   }

  render() {
    return (
      <div>
         <h1>{this.state.count}</h1>
        <button onClick={this.Increment}>Clickkkkkk</button>
      </div>
    )
  }
}

*/

//^ using functional based component  we dont bind here because already FBC arrow function is there so directly we can use the functionl




//^ ========================================

/** 
import React, { useState } from 'react'

const App = () => {
   let[count, setCount] = useState(0)

   function Increment(){
      setCount(count+1)
   }
  return (
    <div>
      <h1>{count}</h1>
        <button onClick={Increment}>Clickkkkkk</button>
    </div>
  )
}

export default App

*/
//^ Globus soft pending work i have to do==================================================Logged and  Guest
/** 
import React, { useState } from 'react'
import Child from './Child'

const App = () => {
   let[isLogged, setItsLogged]=useState(true)
  return (
    <div>
     <Child isLogged={isLogged}/>
    </div>
  )
}

export default App

*/

//^ =============================================  dif  pages 
/** 
import React, { useState } from 'react'
import Home from './Home'
import Career from './Career'


const App = () => {
let[isLogged, setIsLogged] = useState(false)
let changeLogged = () =>{
   setIsLogged(false)
}

let changeLogged1 = () =>{
   setIsLogged(true)
}

  return (
    <div>
      {isLogged ?
      <>
      <h1> Home page</h1>
      <Home/>
      <button onClick={changeLogged}>Next</button>
      </>
      :
      <>
      <h1> Career</h1>
      <Career/>
      <button onClick={changeLogged1}>Previous</button>
      
      </>
      }
    </div>
  )
}

export default App

*/

/** 
import React, { useState } from 'react'
import EMPLOYEE from "./Employee.json"
import "./Global.css"
const App = () => {
   
   let[state, setState]= useState({Employee:EMPLOYEE})
   
  return (
   <section>
      {state.Employee.map((m) => {
         console.log(m);
         return (
            <>
               <div classname='div1'>
                  <h1>Name:{m.Name}</h1>
                  <h2>Age:{m.Age}</h2>
                  <h3>City:{m.City}</h3>

               </div>
            </>
         )
      } 
      )}
    </section>
  )
}

export default App

*/
//^ ======================================
//^ font icons and magges 

/** 

import React from 'react';
import IMAGE from"./beautiful-old-city-view_1417-1603.avif";
import "./Global.css";
import {FcAndroidOs} from "react-icons/fc";

const App = () => {
  return (
    
      <div className='divImg'> 
      <img src={IMAGE} alt="IMAGE" />
      <FcAndroidOs className="icon"/>
      </div>
    
  )
}

export default App


//^ ===========================================
//^ Input ref used to foucs on the

import React, { Component } from 'react'

export default class App extends Component {
   constructor(props) {
     super(props)
      this.inputRef = React.createRef()
   }

   ChangeColor = () => {
      this.inputRef.current.placholder = "Enter your name"
      this.inputRef.current.style.color="red"
      this.inputRef.current.style.background="yellow"
   }
        

   
   
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.ChangeColor}> submit</button>
      </div>
    )
  }
}


*/
//^ ===============================

//^ using functional based componentusing createRef

/** 
import React from 'react'
import { useRef } from 'react';

function App() {
   let inputRef = useRef();

      let changeItems= () =>{
         inputRef.current.style.color="yellow"
         inputRef.current.style.background="Red"
         inputRef.current.placeholder="Enter your name"
      }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={changeItems}>Submit</button>
      
    </div>
  )
}

export default App

*/
//^ ===========================================

/** 

import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Video from "./Video.mp4"

const App = () => {

   let VideoRef = useRef()
   let[play, setPlay] = useState(true)
   let  [text, setText]=useState()

   let playAndpause=()=>{
      setPlay(!play)
   if(play==true)

   {
      setText("Video is playing...")  
      VideoRef.current.play();

   }else{
      setText("video is Pause_")
      VideoRef.current.pause();
   }

   }

  return (
    <div>
      <h1>{text}</h1>
      <video style={{height:"300px", width:"300px" }} src={Video} ref={VideoRef} onClick={playAndpause}>click</video>

    </div>
  )
}

export default App

*/

//^============================= 



//^ Testynthre  app cloning

/** 
import React from 'react'
import "./Global.css"

const App = () => {
  return (
    
      <section>
         <div className="navBar">
             <p>hello@testanthra.com</p>
          </div>

          <div className="section-2">
          <img data-hw="3.0416666666667" 
          alt="Test Yantra Global" 
          data-src="https://testyantraglobal.com/wp-content/uploads/2022/03/logo_testyantra_global.png" 
          class="btMainLogo ls-is-cached lazyloaded" 
          src="https://testyantraglobal.com/wp-content/uploads/2022/03/logo_testyantra_global.png"></img>
           
      <ul>
         <li>Home</li>
         <li>Services</li>
         <li>Products</li>
         <li>Industries</li>
         <li>Articls</li>
         <li>Abouts</li>
      </ul>
      </div>
          <div>

          </div>

          <div>

          </div>

      </section>
  
  )
}

export default App


*/


//^ this is for the Higher order function
/** 
import React from 'react'
import Hover from './Hover'

const App = () => {
  return (
    <div>
      <Hover/>
    </div>
  )
}

export default App

*/
//^==================================

/**
import React, { useEffect, useState } from 'react'

const App = () => {

let [state, setState] =useState()
//? Took an arrow function too fetch an api

let fetchApi =() =>{
   let data = fetch("https://api.github.com/users")
   console.log(data)
   data.then((msg) =>{
      let finalData = msg.json()
      console.log(finalData)
      finalData.then((m) =>{
         console.log(m)
         setState(m)
      })
   })   
}
useEffect(() => {
   fetchApi()
}, [])

  return (

    <div>



{state.map((y)=>{
         console.log(y)

         return(<>
         
         <h1>{y.login}</h1>
         <h2>{y.id}</h2>
         <a href={y.url}>{y.url}</a>
         </>)
        
         })
      }
      
    </div>
  )
}

export default App

*/

//^ fetching data from API using aaync and await // shortend fragment


/** 
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Global.css"

const App = () => {

let[data, setData]=useState([])

  async function fetchApi(){
   let data=await fetch("https://dummyjson.com/products")
   console.log(data)
   let finaldata= await data.json();
   console.log(finaldata)
    let d= finaldata.products
   setData(d)
  }
   useEffect(() => {
      fetchApi()
   },[])
  http://localhost:8080/people/getall
//^ by using axios

// let fetchApi = () =>{
//    return axios.get("https://dummyjson.com/products").then((response) => {
//       console.log(response.data.products)
//       .setDate(response.data.products)
//    })
// }
  return (
   <section>
      <table>
      <thead>
            <th>Id</th>
            <th>Image</th>
            <th>Discription</th>
            <th>Title</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Category</th>
         </thead>
<tbody>
         {
         data.map((m) => {
            // console.log(m.id)

            return(<>
            <tr>
               <td>{m.id}</td>
               <td id='img'><img src={m.thumbnail} alt={"Hello"} /></td>
               <td  id='discription'>{m.description}</td>
               <td>{m.title}</td>
               <td>{m.price}</td>
               <td>{m.stock}</td>
               <td>{m.rating}</td>
            </tr>
            
            </>)
         })
}
         </tbody>

      </table>
   </section>
  )
}

export default App

*/

//^  form data
/** 
import React from 'react'
import { useState } from 'react'

const App = () => {

   let[loading, setLoading] = useState(false)
   let[email, setEmail] = useState("")
   let[password, setPassword]= useState("")

   let handleSubmit = (e) =>{
      e.preventDefault()
      
         try{
            setLoading(true)
            console.log({email, password})
         }catch (error){
         console.log(error)
      }
      setEmail("")
      setLoading(false)
      setPassword("")
   
   }
  return (
    <section>
      <article>
         <main>
            <form action="onSubmit">{handleSubmit}
            <div>
               <input type="email"
               value={email}
               placeholder='enter the email'
               onChange={(e) =>{setEmail(e.target.value)}}
                />
               </div>

               <div>
                  <input type="password"
                  value={password}
                  placeholder='Enter the password'
                  onChange={(e) => {setPassword(e.target.value)}}
                  />
               </div>

               <div>
                  <button>{loading ? "Loading...." : "Login"}</button>
               </div>

               </form>
         </main>
      </article>
    </section>
    
  )
}

export default App
*/

//^====================================== Login form with first name last name 
//^ 

/**
import React from 'react'
import { useState } from 'react';
import  "./Global.css"

const App = () => {

   let[state, setState] =useState ({firstname:"", lastName:"", email:"", password:"", confirmPassword:"", number:"", loading:false })

   let handleChange = (e) =>{
      let {name, value} =e.target;
      setState({...state, [name]:value})

         e.preventDefault()
   
        

   let handleSubmit = (e) =>{
      e.preventDefault();

      try{
         setState({loading: true})
         console.log({firstname, lastName, email, password, confirmPassword, number})
      }catch(error){
         console.log(error)
      }

      setState({firstname: "", lastName:"", email:"", password:"", confirmPassword:"", number:"", loading:false})
   }

   let {firstname, lastName, email, password, loading} = state;
  return (
      <div>, 
         <form action="" onSubmit={handleSubmit}>
            <div>
               <input type="text"
               placeholder='Eneter your firstname'
               name='firstname'
               value={firstname}
               onChange={handleChange}
               />
            </div>

            <div>
               <input type="text"
               placeholder='Eneter your lastName'
               name='lastName'
               value={lastName}
               onChange={handleChange}
               />
            </div>

            <div>
               <input type="text"
               placeholder='Eneter your email'
               name='email'
               value={email}
               onChange={handleChange}
               />
            </div>

            <div>
               <input type="password"
               placeholder='Eneter your password'
               name='password'
               value={password}
               onChange={handleChange}
               />
            </div>
            <div>
            <button>{loading ? "Loading...." : "Login"}</button>
            </div>
         </form>
      </div>

   
  )
}

export default App

 */

//^ ===============================================



// import React from 'react'
// import Layout from './Layout'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from './Home'
// import Career from './Career'
// import Service from './Service'
// import ContactUs from  './ContactUs'



// const App = () => {
//   return (
//    <section>
//       <article>
//          <Router>
//             <Layout/>
//             <Routes>
//                <Route path='Home' element={<Home/>}/>
//                <Route path='Career' element={<Career/>}/>
//                <Route path='Service' element={<Service/>}></Route>
//                <Route path='ContactUs' element={<ContactUs/>}></Route>
//             </Routes>
//          </Router>
//       </article>
//    </section>
//   )

// export default app

//^ ================================

// import React from 'react'
// import Student from 'Studenet'

// const App = () => {

//   return (
//    <section>
//      <Student/>
//    </section>
//    )
// }

// export default App

//^ Day 03/11/2023 Fetching Api using coustom Hook

// import FakeStore from './FakeStore'
// import React from 'react'
// import GitHubUser from './GitHubUser'

// const App = () => {
//   return (
//     <div>
//    <FakeStore/>
//    <hr/>
//    <GitHubUser/>
//     </div>
//   )
// }

// export default App

//^ Day 03/11/2023  HOC 
// import React from 'react'
// import CounterHOC from './CounterHOC'

// const App = () => {
//   return (
//     <div>
//       <CounterHOC/>
//     </div>
//   )
// }

// export default App

//^ Memoization ================================

// import React from 'react'
// import ParentMemoization from './Componenets/ParentMemoization'

// const App = () => {
//   return (
//     <div>
//       <ParentMemoization/>
//     </div>
//   )
// }

// export default App

//^ 04/11 /2023====================useref
// import React from 'react'
// import UseRefS from './Componenets/UseRefS'

// const App = () => {
//   return (
//     <div>
//       <UseRefS/>
//     </div>
//   )
// }

// export default App

//^ Controlled Component=================

// import React from 'react'
// import ControlledComponent from './Componenets/ControlledComponent'
// import UncontrolledComponent from './Componenets/UncontrolledComponent'

// const App = () => {
//   return (
//     <div>
//       <ControlledComponent/>
//       <UncontrolledComponent/>
//     </div>
//   )
// }

// export default App

//^ PureReact Component using rcc/ class based component

// import React from 'react'
// import PureReactComponent from './Componenets/PureReactComponent'

// function App() {
//   return (
//     <div>
//       <PureReactComponent/>
//     </div>
//   )
// }

// export default App


//^ My Working sample fetching git api users

// import React from 'react'
// import FetchSample from './FetchSample'

// function App() {
//   return (
//     <div>
//       <FetchSample/>
//     </div>
//   )
// }

// export default App

//^ Form validation Date 06/11/2023

// import React from 'react'
// import FormValidation from './Componenets/FormValidation'
// import ReactHookForm from './ReactHookForm'

// function App() {
//   return (
//     <div>
//      <FormValidation/>
//      <hr />
//      <ReactHookForm/>
//     </div>
//   )
// }

// export default App

//^ Slide bar

// import React from 'react'
// import ImageSlider from './Componenets/ImageSlider'

// const App = () => {
//    let images =[
//       'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
//       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg',
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg',
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrObpl_GmQFVoRDHEirQnxmhcHWsap7Jrl2SYvaX4Tlieq7MRu8l_susr90lNYT7WqvkU&usqp=CAU'
//    ]


//   return (
//     <div className='app'>
//       <h1>Image Slider</h1>
//    <ImageSlider images={images}/>

//     </div>
//   )
// }
// export default App

//^ React UseReduceHook data 08/11/2023

// import React from 'react'
// import UseReducerHook1 from './Componenets/UseReducerHook1'
// const App = () => {


//   return (
//     <div>
//       <UseReducerHook1/>

//     </div>
//   )
// }

// export default App

//^ Fetching Api using useReducer Hook===============

// import React from 'react'
// import FakeStoreApiUserReducer from './Componenets/FakeStoreApiUserReducer'

// const App = () => {
//   return (
//     <div>
//       <hr />
//       <FakeStoreApiUserReducer/>
//     </div>
//   )
// }

// export default App

//^ Props drilling by myself 08/11/2023

// import React from 'react'
// import NameSlider from './Componenets/NameSlider'

// const App = () => {
//    let names=["Arun", "Charan", "Chetan", "Kiran", "Naveen", "Praveen", "Tharun" ];
//   return (
//     <div>
//       <h1 style={{ fontSize: '24px', textAlign: 'center', color: '#333', margin: '20px 0' }}>Names Slider</h1>
//       <NameSlider Names={names}/>
//     </div>
//   )
// }

// export default App

//^ Routings data 09/11/2023 ===============================

// import React from 'react'
// import { BrowserRouter,  Routes, Route } from 'react-router-dom'
// import "./Navbar/Home"
// import "./Navbar/Login"
// import "./Navbar/Laptops"
// import "./Navbar/Mobiles"
// import "./Navbar/Register"
// import Navbar from './Navbar/Navbar'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar navLinks={{key1:"Home", key2:"Products", key3:"Login", key4:"Signup"}}
//       navPaths={{url1:"/", url2:"/products", url3:"/login", url4:"/register"}}
//       className={Navbar} anchorClass={Navbar}/>
//       <Routes>
//          <Route path="/" element="Home"/>
//          <Route path="/products" element={<h1>Products</h1>} />

//          <Route index element={<Laptops
//           />}/>
//          <Route path="mobiles" element={<Mobiles/>}/>
//          <Route path="laptop" element={<Laptops/>}/>
//          <Route path="telivision" element={<Telivisions/>}/>
//          <Route path="watches" element={<Watches/>}/>
         
//          <Route/>

//          <Route path="/login" element={<h1>Login</h1>} />
//          <Route path="/register" element={<h1>Register</h1>} />
//          <Route path="*" element={<h1>Page not found</h1>} />
         
//       </Routes>
//       </BrowserRouter>
      
//     </div>
//   )
// }

// export default App


//^ ========================================
import React from 'react'
import 'basavarajuds'


const App = () => {
  return (
   
    <div>
      
    </div>
  )
}

export default App

