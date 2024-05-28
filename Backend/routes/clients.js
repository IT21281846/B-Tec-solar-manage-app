const router = require("express").Router();
let clients = require("../models/client");
const path = require('path')
const multer = require("multer");

router.route("/signup").post((req,res)=>{

    const email = req.body.email;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const password = req.body.password;
    

    const newclient = new clients({
        email, 
        fname,
        lname,
        password
        
    })

    newclient.save().then(()=>{
        res.json("Successfully Registerd")
    }).catch(()=>{
        console.log(err);
    })
})

const projectRouter = require("./routes/projects.js");
app.use("/project",projectRouter);

const clientRouter = require("./routes/clients.js");
const Client = require("./models/client.js");
app.use("/client",clientRouter);

app.post("/", (req, res)=> {
    const {email, password} = req.body;
    Client.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("Password incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})


module.exports = router;