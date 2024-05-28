import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import {
    MDBInput
  }
  from 'mdb-react-ui-kit';

function Login(){

         const navigate = useNavigate()

        const[email,setEmail] = useState('')
        const[password,setPassword] = useState('')

        const handleSubmit = async (e) => {
            e.preventDefault()

            axios.post('http://localhost:8070/',{email, password})
            .then(result => {console.log(result)
                if(result.data ==="Success"){
            navigate('/home')}
        })
            .catch(err=> console.log(err))

        }
            
    return(
        
        
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Project Management</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Customer Management <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Repair Management</a>
                    </li>

             
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Inverntory Management</a>
                    </li>
                </ul>
            </div>
        </nav>

    <div class="container-fluid">
        <h1 style={{backgroundColor: "#81AB44",fontSize:48,padding:5, }}>Project Management</h1>
    </div>
            
            <div className="login-container">

            <div className="text-center">
              <img src="https://cdn.enfsolar.com/ID/logo/614462b918e7c.jpg?v=1"
                style={{width: '185px'}} alt="logo" />
              <h5 className="mt-1 mb-5 pb-1">B Tech Solar</h5>
            </div>

            <h5>Please login to your account</h5>
            <form onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='text' placeholder="Enter Email"
            style={{ width: '400px', height: '40px' }} onChange={(e)=>{setEmail(e.target.value);}}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' placeholder="Enter Passowrd"
            style={{ width: '400px', height: '40px' }} onChange={(e)=>{setPassword(e.target.value);}}/>
           
            <input type="submit" value="Login" className="login-button"
            />
            </form>
            </div>

        <div className="center-button">
        <input type="button" value="You don't have account ? Please SignUp" className="login-button"
        onClick={()=>{
            navigate("/signup");
        }}/>
        </div>




</div>      
    )
}
export default Login;
