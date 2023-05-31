import express from 'express';
import Book from "../model/Book.js"
import {getAllBooks, addBooks, getBookById, updateBook, deleteBook} from "../controller/booksController.js";


const router = express.Router();




router.get("/", getAllBooks);
router.post("/", addBooks);
router.get("/:id", getBookById);
router.put("/:id", updateBook)
router.delete("/:id", deleteBook);




export default router;  