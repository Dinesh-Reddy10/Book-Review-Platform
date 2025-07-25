# 📚 Book Review Platform

A full-stack Book Review Platform built using **Node.js**, **Express**, **MongoDB**, and **React.js** as part of the 7WEBS Software Engineering Internship assignment.

---

## 🚀 Features

- 🔐 User Authentication (Login using JWT)
- 🔒 Protected APIs with middleware
- 📖 List of Books (fetched from MongoDB)
- ✍️ Add Reviews for Books
- ✅ React Frontend with Routing & Bootstrap UI
- 🧠 Token stored securely in localStorage

---

## 🛠 Tech Stack

| Layer        | Technologies                            |
|--------------|------------------------------------------|
| **Frontend** | React, Axios, React Router, Bootstrap    |
| **Backend**  | Node.js, Express, Mongoose               |
| **Database** | MongoDB Atlas                            |
| **Auth**     | JWT (JSON Web Tokens)                    |

---

## 📂 Folder Structure


book-review-platform/
├── backend/
│   ├── controllers/
│   │   ├── authController.js       # Handles login/register logic
│   ├── models/
│   │   ├── User.js                 # Mongoose schema for users
│   │   ├── Book.js                 # Mongoose schema for books
│   │   └── Review.js               # Mongoose schema for reviews
│   ├── routes/
│   │   ├── authRoutes.js           # /api/auth routes
│   │   ├── bookRoutes.js           # /api/books routes
│   │   └── reviewRoutes.js         # /api/reviews routes
│   ├── middleware/
│   │   └── authMiddleware.js       # Protect routes using JWT
│   ├── .env                        # Environment variables (excluded via .gitignore)
│   ├── server.js                   # Entry point for backend app
│   └── package.json                # Backend dependencies
│
├── frontend/
│   ├── public/
│   │   └── index.html              # Root HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js            # Login form
│   │   │   ├── BookList.js         # Displays list of books
│   │   │   └── AddReview.js        # Add a review to selected book
│   │   ├── App.js                  # App routing using React Router
│   │   └── index.js                # React entry point
│   └── package.json                # Frontend dependencies
│
├── .gitignore                      # Prevents committing node_modules, .env, etc.
├── README.md                       # This file

