import React,{useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
export default function AddProject(){

    const [projectName,setName] = useState("");
    const [projectId,setId] = useState("");
    const [customer,setCName] = useState("");
    const [location,setLocation] = useState("");
    const [capacity,setCapacity] = useState("");
    const [cost,setCost] = useState("");
    const [usedProducts,setProducts] = useState("");
    const [description,setDiscription] = useState("");
    
    const history = useNavigate();
    const [isValid,setIsValid]=useState("");
    useEffect(()=>{
        if(projectId.startsWith('OP'))
        {
            setIsValid(true);
        }else if(projectId.startsWith('FP'))
        {
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
        
    },[projectId]);
    

    function sendData(e){
        
        e.preventDefault();
        
        const newProject = {
            projectName,projectId,customer,location,capacity,cost,usedProducts,description
        }
        axios.post("http://localhost:8070/project/add",newProject)
        .then(()=> history("/home"),window.alert("Project Successfully Added!!!")
        ).catch((err)=>{
            alert(err)
        })

    }
    
    

    return(
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="home">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item active">
                        <a class="nav-link" href="/add">Add Project </a>
                    </li>
                </ul>

            </div>
        </nav>



        <div class="container-fluid">
        <h1 style={{backgroundColor: "#81AB44",fontSize:48,padding:5, }}>Project Management</h1>
        <h1 style={{fontSize:36,padding:10, }}>Add New Project</h1>
        
        <form onSubmit={sendData} >
        
            <div class="form-group row ">
                <label for="name" class="col-sm-1 col-form-label">Project Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" placeholder="Enter Project Name" onChange={(e)=>{
                        setName(e.target.value);
                        }}required/>
                     </div>
                     
            </div>
            <div class="form-group row">
                <label for="id" class="col-sm-1 col-form-label">Project Id:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="id" placeholder="Enter Project Id"onChange={(e)=>{
                        setId(e.target.value);
                        }}/>
                    </div>
            </div>{!isValid && (
        <p style={{ color: 'red' }}>
          Project ID must start with 'OP or FP'.
        </p>
      )}
      
            <div class="form-group row">
                <label for="customer" class="col-sm-1 col-form-label">Customer Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="customer" placeholder="Enter Customer Name"onChange={(e)=>{
                        setCName(e.target.value);
                        }}required/>
                    </div>
            </div>
            

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="location">Location:</label>
                    <input type="text" class="form-control" id="location" placeholder="Enter Project Location"onChange={(e)=>{
                        setLocation(e.target.value);
                        }}required/>
                </div>
                <div class="form-group col-md-4">
                    <label for="capacity">Capacity: (kwh)</label>
                    <input type="text" class="form-control" id="capacity" placeholder="Enter Project Capacity"onChange={(e)=>{
                        setCapacity(e.target.value);
                        }}required 
                        pattern="[0-9]+(\.[0-9]+)?"
                        title="Please enter a valid number." />
                </div>
                <div class="form-group col-md-4">
                    <label for="cost">Total Cost: (LKR Million)</label>
                    <input type="text" class="form-control" id="cost" placeholder="Enter Project Total Cost"onChange={(e)=>{
                        setCost(e.target.value);
                        }}required
                        pattern="[0-9]+(\.[0-9]+)?"
                        title="Please enter a valid number." />
                </div>
            </div>
            <div class="form-group">
                <label for="products">Used Products</label>
                <textarea class="form-control" id="products" rows="3"onChange={(e)=>{
                        setProducts(e.target.value);
                        }}></textarea>
            </div>
            <div class="form-group">
                <label for="discription">Discription</label>
                <textarea class="form-control" id="discription" rows="3"onChange={(e)=>{
                        setDiscription(e.target.value);
                        }}></textarea>
            </div>
            
            
            <button type="submit" class="btn btn-primary" disabled={!isValid} >Submit</button>
        </form>
        
        </div>
    </div>
    )

}
/*
<div class="form-group">
                <label for="picture">Upload Image</label>
                <input type="file" class="form-control-file" id="picture"/>
            </div>
            
 disabled={!isValid}


*/