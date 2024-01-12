import React from 'react'

function ChildOneMemoization() {

   console.log("Child One Memoization")
  return (
    <div>
      
    </div>
  )
}

export default React.memo(ChildOneMemoization)
