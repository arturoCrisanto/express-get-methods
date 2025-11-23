import express from "express";
import {
  getAllBooks,
  getBookById,
  getbyGenre,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.get("/books/genre/:genre", getbyGenre);

export default router;
