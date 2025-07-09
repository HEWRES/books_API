import Book from "../models/booksModel.js";
import mongoose from "mongoose";

const showBooks = async (req, res, next) => {
    try{
        let books = await Book.find();
        res.status(200).json(books);
    }
    catch(error){
        let err = new Error(error);
        next(err);
    }
}

const showBook = async (req, res, next) => {
    const id = req.params.id;

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            let err = new Error("Invalid ID format!");
            err.status = 400;
            return next(err);
        }

        let book = await Book.find({_id: id});
        res.status(200).json(book);
    }
    catch(error){
        let err = new Error(error);
        next(err);
    }
}

export { showBooks, showBook };