const Review = require('../models/Review');

// POST /api/reviews/:bookId
exports.addReview = async (req, res) => {
  try {
    const { rating, review_text } = req.body;
    const { bookId } = req.params;

    const review = new Review({
      book: bookId,
      reviewer: req.user.userId,
      rating,
      review_text
    });

    await review.save();
    res.status(201).json({ message: 'Review added', review });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add review', error: err.message });
  }
};
