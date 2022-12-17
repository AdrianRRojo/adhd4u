import React from "react";
import {Routes, Route} from 'react-router-dom'


import Forum from "./components/pages/Forum";
import Planner from "./components/pages/Planner";
import Timer from "./components/pages/Timer";
import Resources from "./components/pages/Resources";
// import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NavBar from "./components/NavBar";
function App() {

  // Changes console.log to the variable "c"
  const c = console.log.bind(document)

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
      </Routes>
    </div>
  );
}

export default App;
