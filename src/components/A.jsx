import React, { createContext,useState } from 'react'
import B from './B'
import E from './E'
export const userContext= createContext()
function A() {

    const[name,setName]= useState("Shriya")
  return (
    <div>A
      
      <userContext.Provider value={{"username": name,"age":22,"address":"Mumbai" }}>
        <B/>
        <E/>
      </userContext.Provider>
    </div>
  )
}

export default A
