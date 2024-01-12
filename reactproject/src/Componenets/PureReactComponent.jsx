import React, { Component, PureComponent,  } from 'react'

export default class PureReactComponent extends PureComponent {
   state={count:0}

   updateCounter=()=>
   {
      this.setState({count:this.state.count+1})
   }

   updateCounter5=()=>
   {
      this.setState({count:5})
   }
  render() {
   console.log("Pure renderd")
    return (
      <div>
        <h1>Pure Componenet</h1>
        <button onClick={this.updateCounter}>update</button>
        <hr />
        <button onClick={this.updateCounter5}>update5</button>
      </div>
    )
  }
}
