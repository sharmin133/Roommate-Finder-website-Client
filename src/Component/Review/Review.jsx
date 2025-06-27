import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Review = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  // Load reviews on component mount
  useEffect(() => {
    fetch('https://roommate-finder-website-server.vercel.app/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch reviews:', err);
        setLoading(false);
      });
  }, []);

  // Handle review form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login to write a review.");
    if (!text.trim()) return alert("Review can't be empty.");

    const newReview = {
      userName: user.displayName || 'Anonymous',
      userPhoto: user.photoURL || 'https://via.placeholder.com/40',
      review: text.trim(),
    };

    try {
      const res = await fetch('https://roommate-finder-website-server.vercel.app/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });

      const data = await res.json();

      if (data.insertedId) {
        const fullReview = {
          ...newReview,
          _id: data.insertedId,
          createdAt: new Date().toISOString(),
        };
        setReviews(prev => [fullReview, ...prev]);
        setText('');
      } else {
        alert('Failed to save review.');
      }
    } catch (error) {
      console.error('Failed to post review:', error);
      alert('Error posting review.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md mt-10 mx-6 transition-colors duration-300">
    
 <h2 className="text-3xl md:text-5xl text-center font-bold text-emerald-800 dark:text-emerald-400 p-4">
           User Reviews
          </h2>
      {user ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
            rows="3"
            placeholder="Write your review..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded mt-2 transition-colors duration-300"
          >
            Submit Review
          </button>
        </form>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Please log in to write a review.
        </p>
      )}

      {loading ? (
        <p className="text-center text-gray-700 dark:text-gray-300">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">No reviews yet. Be the first!</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((r) => (
            <div
              key={r._id}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={r.userPhoto || 'https://via.placeholder.com/40'}
                  alt={r.userName || 'User'}
                  className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600"
                />
                <p className="font-semibold text-gray-900 dark:text-gray-100">{r.userName || 'Anonymous'}</p>
              </div>
              <p className="text-gray-800 dark:text-gray-200">{r.review}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {r.createdAt ? new Date(r.createdAt).toLocaleString() : ''}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;