import BookModel from "../model/book.model.js";
import { catchAsyncError } from "../utils/catchAsyncError.js";



export const createBook = catchAsyncError(async(data,res)=>{
    console.log(data,'enter in book');
    const book = await BookModel.create(data)
    console.log('book');
    res.status(201).json({
        success: true,
        book
    })
})