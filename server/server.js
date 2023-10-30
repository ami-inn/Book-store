import { app } from "./app.js";
import dotenv from 'dotenv';
import connectDB from './utils/db.js'
dotenv.config();




app.listen(process.env.PORT,()=>{
    console.log(`server is connected with ${process.env.PORT}`)
    connectDB()
})