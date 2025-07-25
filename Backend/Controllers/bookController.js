const Book = require('../models/Book');
const Review = require('../models/Review');

// POST /api/books
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;

    const book = new Book({
      title,
      author,
      genre,
      addedBy: req.user.userId, // from authMiddleware
    });

    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add book', error: err.message });
  }
};

// GET /api/books
exports.getAllBooks = async (req, res) => {
  try {
    const { author, genre, page = 1, limit = 5 } = req.query;

    const filter = {};
    if (author) filter.author = author;
    if (genre) filter.genre = genre;

    const books = await Book.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const booksWithRatings = await Promise.all(
      books.map(async (book) => {
        const reviews = await Review.find({ book: book._id });
        const avgRating =
          reviews.length > 0
            ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
            : null;
        return { ...book._doc, averageRating: avgRating };
      })
    );

    res.json(booksWithRatings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch books', error: err.message });
  }
};

// GET /api/books/:id
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const reviews = await Review.find({ book: book._id }).populate('reviewer', 'username');

    const avgRating =
      reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : null;

    res.json({ ...book._doc, averageRating: avgRating, reviews });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch book details', error: err.message });
  }
};
