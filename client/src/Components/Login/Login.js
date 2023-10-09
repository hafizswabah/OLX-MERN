import axios from 'axios';
import React, { useContext, useState } from 'react';
import { authContext } from '../../context/AuthContext';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState()
  const {refresh,setRefresh}=useContext(authContext)


  async function login(e) {
    e.preventDefault()
    let { data } = await axios.post("http://localhost:7777/login",
      { email, password })
    console.log(data);
    if (data.error) {
      setErr(data.message)
    }else{
      setRefresh(!refresh)
    }
  }
  console.log(refresh);
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}

          />
          <br />
          <br />
          <h4 style={{color:"red",fontSize:"18px",marginTop:"10px"}}>{err}</h4>
          <button onClick={login}>Login</button>
        </form>

      </div>
    </div>
  );
}

export default Login;
