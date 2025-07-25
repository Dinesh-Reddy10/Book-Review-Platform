const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { addReview } = require('../controllers/reviewController');

// Add a review for a book (auth required)
router.post('/:bookId', authMiddleware, addReview);

module.exports = router;
