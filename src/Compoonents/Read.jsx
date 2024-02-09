import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get('https://65c4b781dae2304e92e32f6d.mockapi.io/crude_operation/crudeoperation')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://65c4b781dae2304e92e32f6d.mockapi.io/crude_operation/crudeoperation/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  }


  const setToLocalStorage=(id,name,email)=>{
  localStorage.setItem("id",id)
  localStorage.setItem("name",name)
  localStorage.setItem("email",email)
  }
  return (
    <>      
    <div className='d-flex justify-content-between m-2'>
        <h3>All Data </h3>
        <Link to='/'>
          <button className='btn btn-secondary'>Create</button>
        </Link>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => (
            <tr key={elem.id}>
              <th scope="row">{elem.id}</th>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>
              <Link to="/update">  
              <button className="btn btn-success"
               onClick=
               {()=>setToLocalStorage
               (elem.id,elem.name,elem.email)} >
                  Edit
                </button>
                </Link>
              
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(elem.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
