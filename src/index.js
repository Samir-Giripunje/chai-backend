import dotenv from "dotenv"
dotenv.config({path:"./env"})
import app from "./app.js";
import connectDB from './db/index.js'

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        `Server is running at port : ${process.env.PORT}`
    })
})
.catch((err)=>{
    console.log("mongodb connection error !!! ",err);
})