import BookModel from "../model/book.model.js";
import { catchAsyncError } from "../utils/catchAsyncError.js";



export const createBook = catchAsyncError(async(data,res)=>{
    const book = await BookModel.create(data)

    res.status(201).json({
        success: true,
        book
    })
})