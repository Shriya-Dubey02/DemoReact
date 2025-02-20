import React, { useEffect } from 'react'

// Memotiziation
function Child() {
    useEffect(()=>{
        console.log("Child rendered")

    })
  return (
    <div>
      <h2>Child</h2>
    </div>
  )
}

export default  React.memo(Child)
