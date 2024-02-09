import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
const Create = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
 const history = useNavigate();
  const header={"Access-control-Allow-Origin":"*"}    
    const handlerSubmit=(e)=>{
      e.preventDefault()
     axios.post(
      "https://65c4b781dae2304e92e32f6d.mockapi.io/crude_operation/crudeoperation",
      {name:name,
        email:email,
        header,
      })
      .then(()=>{
        history("/read")
      })
     
    }

    
  return (
    <>
    <div className='d-flex justify-content-between m-2'>
    <h2>Create</h2>
    <Link to='/read'>
    <button className='btn btn-primary'>Show Data</button>
   </Link> 
   </div>
          <form >
              <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type='text' onChange={(e)=>setName(e.target.value)} className="form-control"  />
              </div>
             <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                 </div>
            
              
              <button type="submit" onClick={handlerSubmit}className="btn btn-primary">Submit</button>
          </form>
    </>
  )
}

export default Create