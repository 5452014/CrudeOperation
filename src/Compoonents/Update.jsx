import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
const Update = () => {
    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const navigate=useNavigate()
    useEffect(()=>{
   setId( localStorage.getItem("id") ) 
   setName(localStorage.getItem("name")) 
    setEmail(localStorage.getItem("email"))
    },[])

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(
            `https://65c4b781dae2304e92e32f6d.mockapi.io/crude_operation/crudeoperation/${id}`,
            {
                name: name,
                email: email,
                
            }).then(()=>{
                 navigate("/read")
            })
    }

  return (
    <>
          
          
          <form >
              <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type='text' value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
              </div>
              <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" aria-describedby="emailHelp" />
              </div>


              <button type="submit" onClick={handleUpdate} className="btn btn-primary">Update</button>
             <Link to='/read'> 
             <button className='btn btn-secondary mx-3'>Back</button>
             </Link>
          </form>
    </>
  )
}

export default Update