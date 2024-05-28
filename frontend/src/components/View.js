import React,{useEffect, useState} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import '../styles/View.css';

export default function View(){

    const [data, setdata] = useState({});
    const id = useParams().id;
 


    useEffect(() => {
        const fetchHandler = async () => {
          await axios
            .get(`http://localhost:8070/project/get/${id}`)
            .then((res) => res.data)
            .then((data) => setdata(data.project));
        };
        fetchHandler();
      }, [id]);


      return(
        
        <div class="container-fluid">

<nav class="navbar navbar-expand-lg navbar-light bg-green">
    <a class="navbar-brand" href="/home" style={{ paddingLeft: '10px', fontWeight: 'bold' }}>Home</a>
    <button class="navbar-toggler" type="button"></button>
</nav>


        
        


    <div className="background-container">
        
        <h1 style={{ paddingLeft: '10px' }}>View Project</h1>
    <form className="your-form">
    <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="projectName"className="font-weight-bold"style={{ fontSize: '20px' }}>Project Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="projectName"
                    name="projectName"
                    value={data?.projectName}
                />
            </div>

            <div className="form-group">
                <label htmlFor="projectId"className="font-weight-bold"style={{ fontSize: '20px' }}>Project Id:</label>
                <input
                    type="text"
                    className="form-control"
                    id="projectId"
                    name="projectId"
                    value={data?.projectId}
                />
            </div>

            <div className="form-group">
                <label htmlFor="customer"className="font-weight-bold"style={{ fontSize: '20px' }}>Customer Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="customer"
                    name="customer"
                    value={data?.customer}
                />
            </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="location"className="font-weight-bold"style={{ fontSize: '20px' }}>Location:</label>
                <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    value={data?.location}
                />
            </div>

            <div className="form-group">
                <label htmlFor="capacity"className="font-weight-bold"style={{ fontSize: '20px' }}>Capacity: (kwh)</label>
                <input
                    type="text"
                    className="form-control"
                    id="capacity"
                    name="capacity"
                    value={data?.capacity}
                />
            </div>

            <div className="form-group">
                <label htmlFor="cost"className="font-weight-bold"style={{ fontSize: '20px' }}>Total Cost: (LKR Million)</label>
                <input
                    type="text"
                    className="form-control"
                    id="cost"
                    name="cost"
                    value={data?.cost}
                />
            </div>
        </div>
    </div>

    {/* Used Products and Description */}
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="usedProducts"className="font-weight-bold"style={{ fontSize: '20px' }}>Used Products</label>
                <textarea
                    className="form-control"
                    id="usedProducts"
                    name="usedProducts"
                    value={data?.usedProducts}
                    rows="3"
                ></textarea>
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="description"className="font-weight-bold"style={{ fontSize: '20px' }}>Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={data?.description}
                    rows="3"
                ></textarea>
            </div>
        </div>
    </div>
</form>

        </div>
        </div>
      )

}

