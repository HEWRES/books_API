import express from "express";
import { showBooks, showBook } from "../controllers/booksController.js";

const router = express.Router();

router.get("/", showBooks);

router.get("/:id", showBook);

export default router;