// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import BookList from './components/BookList';
import AddReview from './components/AddReview'; // ✅

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/review/:bookId" element={<AddReview />} /> {/* ✅ */}
      </Routes>
    </Router>
  );
}

export default App;
