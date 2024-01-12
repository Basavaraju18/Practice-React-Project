/** 
import React, { useState } from 'react'
import Heart from 'react-animated-heart';
import CountUp from 'react-countup'


const Service = () => {
  const [isClick, setClick] = useState(false);
  return (
    <div className='Service'>
     <h1>Service Page</h1> 

     <CountUp
     start={100}
      end={500}
      duration={10}
     
      onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start} >Start</button>
    </div>

  )}

     

     </CountUp>
     <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  )
}

export default Service
*/

// ==========================================
 
//^ COUNTDOWN CIRCLE TIMER rafce
/**
  import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Service = () => {
  return (
    <div>

<CountdownCircleTimer
    isPlaying
    duration={7}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
      
    </div>
  )
}

export default Service

 */

// ==========================================
//^  CLOCK SHOWING


import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'

const Service = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
    <p>Current Time!</p>
    <Clock value={value}/>
    </div>
  )
}

export default Service




////^  phon input

// import React from 'react'

// const Service = () => {


//   return (
//     <div>Service</div>
//   )
// }

// export default Service