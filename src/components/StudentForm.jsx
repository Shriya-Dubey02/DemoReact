import React, { useReducer } from 'react'

function StudentForm() {

   const reduce=(prev,newData)=>{
 
    return {...prev,...newData}

   }

   
    const initData={sname:"",email:""}
    const[data,setData]=useReducer(reduce,{...initData})

    const handleName=(e)=>{
        setData({sname:e.target.value})
    }

    const handleEmail=(e)=>{
        setData({email:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("submitted", data);

    }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <label htmlFor="">Enter Student Name</label>
        <input type="text" name='sname' onChange={handleName} value={data.sname} />

        <label htmlFor="">Enter Email id</label>
        <input type="text" name='email' onChange={handleEmail} value={data.email} />

        <input type="submit" />
      </form>

    </div>
  )
}

export default StudentForm
