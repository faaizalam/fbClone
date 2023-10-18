import express from 'express'
import dotenv from "dotenv"
import mongoose from "mongoose"
import helmet from "helmet"
import morgan from "morgan"
import { userRouter } from './routes/users.js'
import { Auth } from './routes/auth.js'
import { followrouter } from './routes/follow.js'
import { PostsRouter } from './routes/Postroutes.js'
import { Likesroutes } from './routes/LikningRoutes.js'
import { likningsystem } from './Controllers/LikeDislike.js'
import cors  from "cors"
import { CommentRout } from './routes/CommentRoutes.js'
import stripe from 'stripe';
const stri = stripe('sk_test_51Lc3rhBCawD8QdEFlYtE9ozyiIGFoJq4LTWbnF8OHxZQMyDvVhs17NJlQPMYSVS9xsy0xhNNTaeQX6nYeWzgy3y9002NHX66FV');

const app =express()

app.use(cors({credentials: true, origin: true}))
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
        console.log(error)
        
    }

}
myfunc()



app.use(userRouter)
app.use(Auth)
app.use(followrouter)
app.use(PostsRouter)
app.use(Likesroutes)
app.use(CommentRout)

app.post('/charge', async (req, res) => {
    try {
      const session = await stri.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [{
          price_data:{
            currency:"inr",

            product_data:{
                name:"pent"
            },
            unit_amount:150*100,
          },
          quantity:2
        }
        ],
        success_url: 'https://yourwebsite.com/success',
        cancel_url: 'https://yourwebsite.com/cancel',
      });
  
      res.json({ sessionId: session });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error:error });
    }
  });
app.use((err, req, res, next) => {
    const status = err.name && err.name === 'validationError' ? 400 : 500;
    res.status(status).send({ message: err.message})

})



















const port =process.env.Port||process.env.port
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)

})