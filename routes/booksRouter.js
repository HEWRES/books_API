import express from "express";
import { showBooks, showBook, addBooks, updateBook, deleteBook } from "../controllers/booksController.js";

const router = express.Router();

router.get("/", showBooks);

router.get("/:id", showBook);

router.post("/", addBooks);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

export default router;