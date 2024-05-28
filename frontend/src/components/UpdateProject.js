import React,{useEffect, useState} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

export default function UpdateProject() {

    const [data, setdata] = useState({});
  const id = useParams().id;
  const history = useNavigate();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if(data.projectId?.startsWith('OP'))
        {
            setIsValid(true);
        }else if(data.projectId?.startsWith('FP'))
        {
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
  }, [data.projectId]);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8070/project/get/${id}`)
        .then((res) => res.data)
        .then((data) => setdata(data.project));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8070/project/update/${id}`, {
        projectName: String(data.projectName),
        projectId: String(data.projectId),
        location: String(data.location),
        capacity: String(data.capacity),
        customer: String(data.customer),
        cost: String(data.cost),
        usedProducts: String(data.usedProducts),
        description: String(data.description),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() =>history("/home"),window.alert("Project Successfully Updated!!!"));
  };

  const handleChange = (e) => {
    setdata((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
    
    


    return(
        <div>
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/home">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item active">
                        <a class="nav-link" href="/add">Add Project </a>
                    </li>
                        
                  

                        
                </ul>
                <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <div class="container-fluid">
        <h1 style={{backgroundColor: "#81AB44",fontSize:48,padding:5, }}>Project Management</h1>
        <h1 style={{fontSize:36,padding:10, }}>Update Project</h1>
        </div>
        
        
            </div>
            <div class="container-fluid">
            <form onSubmit={handleSubmit}>
            
            <div class="form-group row">
                <label for="name" class="col-sm-1 col-form-label">Project Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="projectName" value={data?.projectName} onChange={handleChange}required/>
                     </div>
            </div>
            <div class="form-group row">
                <label for="id" class="col-sm-1 col-form-label">Project Id:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="id" name="projectId" value={data?.projectId} onChange={handleChange}/>
                    </div>
            </div>{!isValid && (
        <p style={{ color: 'red' }}>
          Project ID must start with 'OP or FP'.
        </p>
      )}
      
      
            <div class="form-group row">
                <label for="customer" class="col-sm-1 col-form-label">Customer Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="customer" name="customer" value={data?.customer} onChange={handleChange}required/>
                    </div>
            </div>
            

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="location">Location:</label>
                    <input type="text" class="form-control" id="location" name="location" value={data?.location} onChange={handleChange}required/>
                </div>
                <div class="form-group col-md-4">
                    <label for="capacity">Capacity: (kwh)</label>
                    <input type="text" class="form-control" id="capacity" name="capacity" value={data?.capacity} onChange={handleChange}
                        required
                        pattern="[0-9]+(\.[0-9]+)?"
                        title="Please enter a valid number."/>
                </div>
                <div class="form-group col-md-4">
                    <label for="cost">Total Cost: (LKR Million)</label>
                    <input type="text" class="form-control" id="cost" name="cost" value={data?.cost} onChange={handleChange}
                    required
                    pattern="[0-9]+(\.[0-9]+)?"
                    title="Please enter a valid number."/>
                </div>
            </div>
            <div class="form-group">
                <label for="products">Used Products</label>
                <textarea class="form-control" id="products"name="usedProducts" value={data?.usedProducts} onChange={handleChange} rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="discription">Description</label>
                <textarea class="form-control" id="discription" name="description" value={data?.description} onChange={handleChange} rows="3"></textarea>
            </div>
            
            
            <button type="submit" class="btn btn-primary"  disabled={!isValid}>Submit</button>
        </form> 
        </div>
        
        </div>
    )
   
}
