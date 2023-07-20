import express from 'express'
import dotenv from "dotenv"
import mongoose from "mongoose"
import helmet from "helmet"
import morgan from "morgan"
import { userRouter } from './routes/users.js'
import { Auth } from './routes/auth.js'

const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(morgan("common"))
dotenv.config()
console.log(process.env.MONGODB_URI)

const myfunc=async()=>{
    try {
        
        const connection= await mongoose.connect(process.env.MONGODB_URI)
        if (connection) {
            console.log("connected")
            
        }
    } catch (error) {
        console.log(error.message)
        
    }

}
myfunc()



app.use(userRouter)
app.use(Auth)



















const port =process.env.Port||process.env.port
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)

})