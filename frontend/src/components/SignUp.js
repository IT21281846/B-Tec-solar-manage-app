import axios from "axios";
import React, { useState } from 'react';
import '../styles/SignUp.css';
import { useNavigate } from "react-router-dom";
import {
    MDBInput
  }
  from 'mdb-react-ui-kit';


const SignUp = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [fname, setFName ] = useState()
    const [lname, setLName ] = useState()
    const [password, setPassword ] = useState()
    const history = useNavigate();

    function sendData(e){
        
      e.preventDefault();
      
      const newclient = {
        email,fname,lname,password
      }
      axios.post("http://localhost:8070/client/signup",newclient)
      .then(()=> history("/home"),window.alert("Successfully Registerd")
      ).catch((err)=>{
          alert(err)
      })

  }

return (

        


      <div>
        <div class="container-fluid">
        <h1 style={{backgroundColor: "#81AB44",fontSize:48,padding:5, }}>Sign Up Page</h1>
        </div>

        


        

        <div className="sign-up-container">
        <h2>Register</h2>

            <div className="text-center">
              <img src="https://cdn.enfsolar.com/ID/logo/614462b918e7c.jpg?v=1"
                style={{width: '185px'}} alt="logo" />
              <h5 className="mt-1 mb-5 pb-1">B Tech Solar</h5>
            </div>

            <form onSubmit={sendData}>
            <div className="center-input">
            <MDBInput wrapperClass='mb-4' id='form1' type='text' placeholder="Email"
            style={{ width: '400px', height: '40px' }} onChange={(e) => setEmail(e.target.value)}required
            pattern=".+@gmail\.com$"
            title="Please enter a valid email."/>

            <MDBInput wrapperClass='mb-4' id='form1' type='text' placeholder="First Name"
            style={{ width: '300px', height: '40px' }} onChange={(e) => setFName(e.target.value)}required/>

            <MDBInput wrapperClass='mb-4' id='form1' type='text' placeholder="Last Name"
            style={{ width: '300px', height: '40px' }} onChange={(e) => setLName(e.target.value)}required/>

            <MDBInput wrapperClass='mb-4' id='form2' type='password' placeholder="Enter Passowrd"
            style={{ width: '300px', height: '40px' }} onChange={(e) => setPassword(e.target.value)}required
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$"
            title="Please enter a strong password with at least 8 characters, including letters and digits."/>

            <button className="sign-up-button">Sign Up</button>
            </div>
            </form>
            
        </div>
        <div className="center-button">
        <input type="submit" value="Already have an account? Please Login" className="login-button"
        onClick={()=>{navigate("/");}}/>
        </div>
        

      </div>
     
    );
  };


    
    


export default SignUp;
