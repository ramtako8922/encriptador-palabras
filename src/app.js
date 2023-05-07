 const express=require("express");
 const cors=require("cors")

 const app=express();

 app.set('port',process.env.PORT||8080)
 app.use(cors());
 app.use(express.json());


 //start server
 app.listen(app.get('port'),()=>console.log("server running port "),app.get('port'))

