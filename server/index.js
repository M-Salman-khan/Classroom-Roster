const express = require("express")
const app = express()
const cors = require("cors");
const Datastore=require("./classSchema")
const PORT = 3000
const dataStoreObj={}

app.use(express.json());
app.use(cors());

app.get("/items",(req,res)=>{
    res.json(dataStoreObj)
})
let counter=1;
app.post("/items",(req,res)=>{
    const item = req.body;
    if(!item.name || !item.sub || !item.cls || !item.grade) return res.status(400).json({"error":"Item params must be provided"});
    const obj = `object${counter}`
    dataStoreObj[obj]=new Datastore(counter,item.name,item.sub,item.cls,item.grade)
    counter++
    console.log(dataStoreObj[obj]);
    
    return res.status(201).json({"message":`Created ${obj}`,object:dataStoreObj[obj]})
})

app.listen(PORT,()=>console.log(`Server is in running state! On port : ${PORT}`))