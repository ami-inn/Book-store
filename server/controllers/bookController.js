import { catchAsyncError } from "../utils/catchAsyncError.js";
import BookModel from "../model/book.model.js";
import mongoose from "mongoose";
import path from "path";
import ErrorHandler from "../utils/ErrorHandler.js";
import { createBook } from "../services/book.service.js";
import cloudinary from "../utils/cloudinary.js";


export const uploadBook = catchAsyncError(async (req, res, next) => {
  try {
    const data = req.body;

    const thumbnail = data.thumbnail

    if(thumbnail){

 

    try {
      const upload = await cloudinary.uploader.upload(thumbnail, {
        folder: "products",
         width: 800,
         height: 700,
            crop: "scale"
      });
      
      console.log(upload, 'upload success');

      data.thumbnail = {
        public_id:upload.public_id,
        url :upload.secure_url
    }

    } catch (error) {
      console.log('eeeeeeeeeeeeeeeeeeeeee');
      console.error('Upload error:', error);
    }
  }

    createBook(data, res, next);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});


export const editBook = catchAsyncError(async (req, res, next) => {
  try {
    const data = req.body;

    // const thumbnail = data.thumbnail;

    // if (thumbnail) {
    //   await cloudinary.v2.uploader.destroy(thumbnail.public_id);

    //   const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
    //     folder: "books",
    //   });

    //   data.thumbnail = {
    //     public_id: myCloud.public_id,
    //     url: myCloud.secure_url,
    //   };
    // }
      const bookId = req.params.id;

      const book = await BookModel.findByIdAndUpdate(
        bookId,
        { $set: data },
        { new: true }
      );
    
      res.status(201).json({
        success: true,
        book
      })

  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

export const getSingleBook = catchAsyncError(async(req,res,next)=>{
    try{

        const book = await BookModel.findById(req.params.id)


        res.status(200).json({
            success:true,
            book
        })
        
    }

    catch(error){
        return next(new ErrorHandler(error.message,400))
    }
})

export const getAllBooks = catchAsyncError(async(req,res,next)=>{
    try {

        const books = await BookModel.find()

        res.status(200).json({success:true,books})
        
    } catch (error) {
        return next(new ErrorHandler(error.message,400))
    }
})

export const deleteBook = catchAsyncError(async(req,res,next)=>{
    try {
        console.log('enter hereee');
        const {id} = req.params

        const book = await BookModel.findById(id)

        if(!book){
            return next(new ErrorHandler("course not found",400))
        }
        console.log(book);

        const books =await BookModel.deleteOne({_id:id})

        console.log('books',books);

        res.status(200).json({success:true,message:"book deleted successfully"})
        
    } catch (error) {
        return next(new ErrorHandler(error.message,400))
    }
})
