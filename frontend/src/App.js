import React,{useState} from "react";
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';




import Login from './components/Login';
import SignUp from './components/SignUp';
import ProjectDash from './components/ProjectDash';
import AddProject from './components/AddProject';
import UpdateProject from "./components/UpdateProject";
import View from "./components/View";



function App() {





  return (
    <div>
    <Router>
    <Routes>
        
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<ProjectDash />}></Route>
        <Route path="/update/:id" element={<UpdateProject />}></Route>
        <Route path="/add" element={<AddProject />}></Route>
        <Route path="/get/:id" element={<View />}></Route>
        
        
     </Routes> 
     
    </Router>
    </div>
    
  ); 
}

export default App; 
