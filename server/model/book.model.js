import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    primaryImage:{
        type: String,
        required: true,
    },
    secondaryImage:{
        type: String,
        required: true,
    },
    rating:{
        type:Number,
        required: true,
    }
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
