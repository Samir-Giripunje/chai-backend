import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app= express()
//cors setting
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// json setting for takiing input
app.use(express.json({
    limit:"16kb"
}))

//setting for taking data from the url 
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

//saving of the static 
app.use(express.static("public"))

//for doing crud operation on the cookies for safty 
app.use(cookieParser())



//routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use('/api/v1/users',userRouter)

export default app