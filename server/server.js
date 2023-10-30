import { app } from "./app.js";
import dotenv from 'dotenv';
import connectDB from './utils/db.js'
import cloudinary from 'cloudinary'
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET_KEY 
})


app.listen(process.env.PORT,()=>{
    console.log(`server is connected with ${process.env.PORT}`)
    connectDB()
})