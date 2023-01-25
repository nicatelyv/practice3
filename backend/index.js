const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const dotenv = require("dotenv")

dotenv.config()

const app = express();
app.use(cors())
app.use(bodyParser.json());

const { Schema } = mongoose

const serviceSchema = new Schema({
    iconclass:{type:String},
    name:{type:String},
    title:{type:String}
})

const Services = mongoose.model("Services" , serviceSchema)
 
//All data
app.get("/api" , (req,res)=>{
    Services.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message: err})
        }
    })
})

//Data by id
app.get("/api/:id", (req,res)=>{
    const {id} = req.params;
    Services.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
                res.status(200)
            }else{
                res.status(404).json({message: err})
            }
        }
    })
})

//Post data
app.post("/api",(req,res)=>{
    let service = new Services({
        iconclass:req.body.iconclass,
        name:req.body.iconclass,
        title:req.body.iconclass,
    })
    service.save()
    res.send({message: "Successfull"})
})

//Delete Data
app.delete("/api/:id", (req,res)=>{
    const {id} = req.params;
    Services.findOneAndDelete(id,(err,doc)=>{
        if(!err){
            res.send({message: "Successfull"})
            res.status(200)
        }else{
            res.status(404).json({message: err})
        }
    })
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECT_URl)
.then(()=> console.log("DB Connected"))
.catch(()=>console.log("DB could not connected"))

app.listen(process.env.PORT, console.log("Server Start"))