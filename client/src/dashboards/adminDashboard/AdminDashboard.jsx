import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'

const AdminDashboard = () => {
    const [requests , setRequest] = useState([]);
    useEffect(()=>{
        // fetching pending org requests if the user is admin
        const token = localStorage.getItem('auth-token');
        fetch('http://localhost:4001/admin/requests',{
            method:'GET',
            headers:{
                'auth-token':token
            }
        }).then((response)=>response.json()).then((data)=>{
            if(data.success){
                setRequest(data.requests)
            }
        })
    },[]);

    const handleApproval= async (id,status)=>{
        fetch("http://localhost:4001/admin/approve", {
          method: "POST",
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: id, status }),
        }).then(() => {
          setRequest((prev) => prev.filter((req) => req._id !== id));
        });
    }
    
  return (
    <div className=''>
        <h1>Organization Requests</h1>
        <ul>
            {
                requests.map((req)=>(
                    <li key={req._id}>
                      {req.name} {req.email}
                      <button
                        onClick={() => handleApproval(req._id, "approved")}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleApproval(req._id, "rejected")}
                      >
                        Reject
                      </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default AdminDashboard