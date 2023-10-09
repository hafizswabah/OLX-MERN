import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from "./Pages/Login"
import ViewPost from './Pages/ViewPost'
import Search from './Pages/Search'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { authContext } from './context/AuthContext';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import Create from './Pages/Create'
function App() {
  axios.defaults.withCredentials = true;
  const { refresh, setRefresh, user, setUser } = useContext(authContext)
  useEffect(() => {
    (async function () {
      let { data } = await axios.get("http://localhost:7777/check-auth")
      console.log(data);
      setUser({login:data.loggedIn,details:data.user})
    })()
  },[refresh])
  console.log(user);
  return (
    <Router>
      <div className="App">
        {user.login==false &&
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/sell' element={<Navigate to="/login"/>}></Route>
      </Routes>
        }
        {
          user.login==true && 
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Navigate to="/"/>}></Route>
            <Route path='/signup' element={<Navigate to="/"/>}></Route>
            <Route path="/sell" element={<Create/>}></Route>
            <Route path='/product/:id' element={<ViewPost />} />
          <Route path='/search' element={<Search />} />
          </Routes>
        }
        
      </div>
    </Router>
  );
}

export default App;
