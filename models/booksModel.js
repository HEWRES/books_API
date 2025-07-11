import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    pages: {
        type: Number,
        required: true,
        min: 1
    },
    release_date: {
        type: Date,
        default: null
    },
    rating: {
        type: Number,
        required: true,
        max: 5,
        min: 1
    },
    price: {
        type: Number,
        required: true,
        min: 1
    }
},
{
    strict: "throw"
});

const Book = mongoose.model("books", booksSchema);

export default Book;