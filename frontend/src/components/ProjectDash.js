import React,{useEffect, useState,} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import '../styles/ProjectDash.css';

function ProjectDash(){
    const id = useParams().id;
    const navigate =useNavigate()
    const[posts,setProjects] = useState([]);


    useEffect(() => {
        getProjects();
    }, [id]);

    const getProjects = () => {
        axios.get("http://localhost:8070/project/display").then((res) => {
            setProjects(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }



    const deleteHandler = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    
        if (confirmDelete) {
            console.warn(id);
            let result = await fetch(`http://localhost:8070/project/delete/${id}`, {
                method: "DELETE"
            });
    
            result = await result.json();
    
            if (result) {
                getProjects();
            }
        }
    };

   

    const [search, setSearch] = useState("");
    const searchItem = posts.filter((post) => {
    if (search === "") {
      return post;
    } else if (
      post?.projectName?.toLowerCase().includes(search.toLocaleLowerCase()) ||
      post?.projectId?.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return posts;
    }
  });

    return(
     <div>
        <div class="container-fluid">
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

                <div>
                <button className="signup-button"onClick={()=>{navigate("/")}}>Log Out</button>
                </div>

                <form class="form-inline" style={{ margin: '10px' }}>
                <input class="form-control mr-sm-2" type="search" onChange={(event) => setSearch(event.target.value)} placeholder="Search" aria-label="Search"/>
                <text class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</text>
                </form>
            </div>
        </nav>
        <h1 style={{backgroundColor: "#81AB44",fontSize:48,padding:5, }}>Project Management</h1>
    </div>
        
         <div class="card-group">

            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">Finished Projects - FP</h1>
                    <h6 class="card-text">Successfully Finished Projects</h6>
                            
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">Ongoing Projects - OP</h1>
                    <h6 class="card-text">Projects Under Construction</h6>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        <Table>
        <thead>
            <tr>
            <th>Project Name</th>
            <th>Project ID</th>
            <th>Customer Name</th>
            <th>Project Location</th>
            <th>Output Capacity (kwh)</th>
            <th>Project Cost (LKR Million)</th>
            
            </tr>
        </thead>
        <tbody>
            
                {searchItem.map(post =>{
                    return (
                    
        
                    <tr>
                    <td>
                        {post.projectName}
                    </td>
                    <td>
                        {post.projectId}
                        
                    </td>
                    <td>
                    {post.customer}
                        
                    </td>
                    <td>
                    {post.location}
                        
                    </td>
                    <td>
                    {post.capacity}
                        
                    </td>
                    <td>
                    {post.cost}
                        
                        
                    </td>
                    
                    
                    <td>
                    <Link to={`/get/${post._id}`} className="btn btn-sm btn-success">View</Link>
                    </td>
                    <td>
                    <Link to={`/update/${post._id}`} className="btn btn-sm btn-success">Update</Link>
                    </td>
                    <td>
                    <button onClick={() => deleteHandler(post._id)} className="btn btn-danger" style={{height:"31px",marginLeft:"20px"}}><p style={{marginTop:"-4px"}}>Delete</p></button>
                    </td>
                    </tr>
                    
                    );
                    })
                    
                }
           </tbody>
           </Table>
        </div>
     
       
    )
         
            
}
export default ProjectDash;

                    