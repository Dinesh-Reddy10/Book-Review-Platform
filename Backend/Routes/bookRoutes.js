const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { addBook, getAllBooks, getBookById } = require('../controllers/bookController');

// Add new book (protected)
router.post('/', authMiddleware, addBook);

// Get all books (with filters)
router.get('/', getAllBooks);

// Get book by ID (with reviews + average rating)
router.get('/:id', getBookById);

module.exports = router;
