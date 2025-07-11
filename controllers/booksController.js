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

        let book = await Book.findById(id);
        res.status(200).json(book);
    }
    catch(error){
        let err = new Error(error);
        next(err);
    }
}

const addBooks = async (req, res, next) => {
    const body = req.body;
    
    try{
        const newBook = await Book.insertOne(body);
        res.status(201).json(newBook);
    }
    catch(err){
        let error = new Error(err);
        error.status = 400;
        next(error);
    }
}

const updateBook = async (req, res, next) => {
    const body = req.body;
    const id = req.params.id;

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            let error = new Error("Invalid ID format!");
            error.status = 400;
            return next(error);
        }

        let updatedBook = await Book.findByIdAndUpdate(id, body, {runValidators: true, new: true});
        res.json(updatedBook);
    }
    catch(err){
        let error = new Error(err);
        error.stauts = 400;
        next(error);
    }
}

const deleteBook = async (req, res, next) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        let error = new Error("Invalid ID format!");
        error.status = 400;
        return next(error);
    }

    await Book.findByIdAndDelete(id);
    res.status(200).json({"msg": "Book successfully deleted"});
};

export { showBooks, showBook, addBooks, updateBook, deleteBook };