// src/components/AddReview.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function AddReview() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `http://localhost:5000/api/reviews/${bookId}`,
        { rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsError(false);
      setMsg('✅ Review added successfully!');
      setTimeout(() => navigate('/books'), 1500);
    } catch (err) {
      setIsError(true);
      setMsg('❌ ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="mb-4">✍️ Add a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              className="form-control"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Comment</label>
            <textarea
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
        {msg && (
          <div className={`alert mt-3 ${isError ? 'alert-danger' : 'alert-success'}`}>
            {msg}
          </div>
        )}
      </div>
    </div>
  );
}

export default AddReview;
