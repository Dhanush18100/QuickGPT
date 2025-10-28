import express from 'express'
import 'dotenv/config'
import cors from "cors";
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import chatRouer from './routes/chatRoutes.js';
import messageRouer from './routes/messageRoutes.js';
import creditRouter from './routes/creditRoutes.js';
import { stripeWebhooks } from './controllers/webhooks.js';

const app=express()

await connectDB()

//Stripe webhooks
app.post('/api/stripe',express.raw({type:'application/json'}),stripeWebhooks)
//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.use('/api/user',userRouter)
app.use('/api/chat',chatRouer)
app.use('/api/message',messageRouer)
app.use('/api/credit',creditRouter)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})