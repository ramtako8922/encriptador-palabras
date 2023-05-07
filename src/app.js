 const express=require("express");
 const cors=require("cors")
 import db from "./config/db.js"

 const app=express();

 app.set('port',process.env.PORT||8080)
 app.use(cors());
 app.use(express.json());


 //start server
 app.listen(app.get('port'),()=>console.log("server running port "),app.get('port'))

 //conection database

 db.connect().then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log("error:",err);
});


