import React, { useState } from 'react';
import axios from 'axios'
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const [err,setErr]=useState('')
async function signup(e){
  e.preventDefault()
 let{data}=await axios.post("http://localhost:7777/signup",
  {name,email,password,phone})
  console.log(data);
  if(data.error){
    setErr(data.message)
  }
}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
         value={name}
         onChange={(e)=>{setName(e.target.value)}}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <h4 style={{color:"red",fontSize:"18px",marginTop:"10px"}}>{err}</h4>
          <br />
          <button onClick={signup}>Signup</button>
        </form>
        
      </div>
    </div>
  );
}
