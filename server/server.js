import { app } from "./app.js";
import dotenv from 'dotenv';
dotenv.config();




app.listen(process.env.PORT,()=>{
    console.log(`server is connected with ${process.env.PORT}`)
})