import React, { useReducer } from 'react'

function FormExample() {
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("data submitted", data)
        
    }


    const reduce=(prevData,newData)=>{
        console.log(prevData);
        console.log(newData);
        return {...prevData,...newData}


    }

    const initialData={username:"XYZ",age:15,address:""}
    const[data,setData]=useReducer(reduce,{...initialData})
    
    const handleName=(e)=>{
        setData({username:e.target.value})
        console.log(data)
    }
    const handleAge=(e)=>{
        setData({age:e.target.value})
    }
    const handleAddress=(e)=>{
        setData({address:e.target.value})

    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="">Enter name</label>
        <input type="text" name='username' value={data.username} onChange={handleName}/>

        <br />

        <label htmlFor="">Enter age</label>
        <input type="number" name='age' value={data.age} onChange={handleAge}/>

        <label htmlFor="">Enter address</label>
        <input type="text" value={data.address} onChange={handleAddress} name='address' />
        <br />

        <input type="submit"  />
      </form>
    </div>
  )
}

export default FormExample
