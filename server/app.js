import express from 'express'

export const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { ErrorMiddleware } from './middleware/error.js'
import dotenv from 'dotenv';
import bookRouter from './routes/book.route.js'
dotenv.config();


console.log('enter heree');
app.use(express.json({limit:"50mb"}))
app.use(cookieParser())

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)

app.use('/api/v1',bookRouter)

app.get("/test", (req, res, next) => {
    res.status(200).json({
      success: true,
      message: "api is working",
    });
  });

  // unknow route
app.all("*",(req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`)
    next(err)
})

app.use(ErrorMiddleware)