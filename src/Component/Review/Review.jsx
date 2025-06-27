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
        // Create full review with _id and createdAt to add to UI
        const fullReview = {
          ...newReview,
          _id: data.insertedId,
          createdAt: new Date().toISOString(),
        };

        setReviews(prevReviews => [fullReview, ...prevReviews]);
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
    <div className="bg-white p-6 rounded-xl shadow-md mt-10 mx-6">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">User Reviews</h2>

      {/* Review form - only if logged in */}
      {user ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            className="w-full border border-gray-300 p-2 rounded-lg"
            rows="3"
            placeholder="Write your review..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2"
          >
            Submit Review
          </button>
        </form>
      ) : (
        <p className="text-center text-gray-500 mb-6">Please log in to write a review.</p>
      )}

      {/* Loading indicator */}
      {loading ? (
        <p className="text-center">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-center text-gray-600">No reviews yet. Be the first!</p>
      ) : (
        // Reviews list
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r._id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={r.userPhoto || 'https://via.placeholder.com/40'}
                  alt={r.userName || 'User'}
                  className="w-8 h-8 rounded-full border"
                />
                <p className="font-semibold">{r.userName || 'Anonymous'}</p>
              </div>
              <p className="text-gray-800">{r.review}</p>
              <p className="text-xs text-gray-500 mt-1">
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
