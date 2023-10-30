import BookModel from "../model/book.model";
import { catchAsyncError } from "../utils/catchAsyncError";



export const createBook = catchAsyncError(async(data,res)=>{
    const book = await BookModel.create(data)

    res.status(201).json({
        success: true,
        book
    })
})