import React, { Component } from 'react'
import UpdateComponent from './HOC'

  class Hover extends Component {
  render() {
   let {count, Increment} =this.props
    return (
     <>
     <h1>{count}</h1>
     <button onMouseOver={Increment}>+</button>
     </>
    )
  }
}

export default UpdateComponent(Hover)
