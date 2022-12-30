import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import Forum from "./components/pages/Forum";
import Planner from "./components/pages/Planner";
import Timer from "./components/pages/Timer";
import Resources from "./components/pages/Resources";
// import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NavBar from "./components/NavBar";

import Register from "./components/pages/profile-pages/Register";
function App() {
const [currentUser, setCurrentUser] = useState(localStorage.getItem('jwt')? jwt_decode(localStorage.getItem('jwt')):null)
  // Changes console.log to the variable "c"
  const c = console.log.bind(document)

  useEffect(() =>{
    const token = localStorage.getItem('jwt')
    if(token){
      setCurrentUser(jwt_decode(token))
    }else{
      setCurrentUser(null)
    }
  },[])

  
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route 
          path='/'
          element={
            // <Home />
            <About />
          }
        />
        <Route 
          path='/forum'
          element={
            <Forum />
          }
        />
        <Route 
          path='/planner'
          element={
            <Planner />
          }
        />
        <Route 
          path='/timer'
          element={
            <Timer />
          }
        />
        <Route 
          path='/resources'
          element={
            <Resources />
          }
        />
        <Route 
          path='/register'
          element={
            <Register />
          }
        />
      </Routes>
    </div>
  );
  
}

export default App;
