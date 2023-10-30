import { catchAsyncError } from "../utils/catchAsyncError";
import BookModel from "../model/book.model";
import mongoose from "mongoose";
import path from "path";
import ErrorHandler from "../utils/ErrorHandler";
import cloudinary from "cloudinary";
import { createBook } from "../services/book.service";

export const uploadCourse = catchAsyncError(async (req, res, next) => {
  try {
    const data = req.body;

    const thumbnail = data.thumbnail;

    if (thumbnail) {
      const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
        folder: "books",
      });

      data.thumbnail = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }

    createBook(data, res, next);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

export const editBook = catchAsyncError(async (req, res, next) => {
  try {
    const data = req.body;

    const thumbnail = data.thumbnail;

    if (thumbnail) {
      await cloudinary.v2.uploader.destroy(thumbnail.public_id);

      const myCloud = await cloudinary.v2.uploader.upload(thumbnail, {
        folder: "books",
      });

      data.thumbnail = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }
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
