import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Loginpage() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {

    const items = JSON.parse(localStorage.getItem('items'));
    const searchData = items.filter((data) => data.email === email && data.password === password);

    if (searchData?.length > 0) {
      navigate(`/${searchData[0]?.type.toLowerCase()}`, { replace: true });
      toast.success("Login Successfully!");
      localStorage.setItem('token', 'flkfhkjshfhfhfhsdhfjsdfhshf');
    } else {
      toast.error("Data Not Found!");
    }
    e.preventDefault();
  };

  return (
    <>
      <div style={{ width: "22%", margin: "auto", marginTop: "150px", border: "1px solid #6b626247", borderRadius: "10px" }}>
        <form style={{ "padding": "15px" }} >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" value={email} placeholder="Email" onChange={(e) => { setemail(e.target.value) }} name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control"  placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} id="exampleInputPassword1" />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleSubmit} style={{ width: "390px", marginTop: "8px", marginBottom: "5px" }}>Login <i className="fa fa-sign-in"></i></button>
          <h7><a href="/dashboard" style={{ textDecoration: "none", display: "flex", justifyContent: "flex-end" }}>Register</a> </h7>
        </form>
      </div>
    </>

  )
}
