import React from 'react'
import CounterHOC from './CounterHOC'

function CounterOne ({count, incrementCounter, decrementCounter}) {

  return (


    <div>
      <h1>Count{count}</h1>
      <buttono onClick={incrementCounter}>+</buttono>
      <buttono onClick={decrementCounter}>-</buttono>
    </div>
  )
}

export default CounterHOC(CounterOne, 1)