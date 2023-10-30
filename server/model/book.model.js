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
    thumbnail:{
        public_id:{
            // required:true,
            type:String
        },
        url:{
            // required:true,
            type:String
        }
    },

    rating:{
        type:Number,
        required: true,
    },
    price:{
      type:Number,
      required: true,
  }
  },
  { timestamps: true }
);

const BookModel = mongoose.model("Book", bookSchema);

export default BookModel;
