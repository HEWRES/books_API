import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    relase_date: Date,
    rating: Number,
    price: Number
});

const Book = mongoose.model("books", booksSchema);

export default Book;