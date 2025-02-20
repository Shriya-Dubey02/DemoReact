import React, { useEffect, useState } from 'react'
import Child from './Child';
// Memotiziation
function Parent() {

    let[counter,setcount]=useState(0);
    useEffect(()=>{
        console.log("Parent rendered")

    })

    
  return (
    <div>
      <h1>Parent component</h1>
      <h1> Button Clicked {counter} times</h1>
      <button onClick={()=>{setcount(counter+1)}}>Click</button>
      <Child/>
    </div>
  )
}

export default Parent
