import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Review = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

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
    <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl text-center font-bold text-blue-800 dark:text-blue-400  my-8">Voices from Our Community</h2>
      {/* <h2 className="text-4xl font-extrabold text-blue-900 dark:text-blue-300 text-center my-8">
        Voices from Our Community
      </h2> */}

      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md   transition-colors duration-300">

        {user ? (
          <form onSubmit={handleSubmit} className="mb-6">
            <textarea
              className="w-full rounded-md border border-pink-300 dark:border-pink-600 p-3 bg-white dark:bg-gray-800 text-blue-900 dark:text-yellow-200 placeholder-pink-400 dark:placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              rows="4"
              placeholder="Write your review..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-3 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white font-semibold rounded-md shadow-sm transition"
            >
              Submit Review
            </button>
          </form>
        ) : (
          <p className="text-center text-blue-700 dark:text-pink-400 mb-6">
            Please log in to write a review.
          </p>
        )}

        {loading ? (
          <p className="text-center text-blue-100 dark:text-pink-400">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-center text-blue-700 dark:text-pink-400">No reviews yet. Be the first!</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((r) => (
              <div
                key={r._id}
                className="bg-pink-50 dark:bg-gray-800 rounded-lg p-5 border border-pink-200 dark:border-yellow-600 shadow-sm transition-colors"

              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={r.userPhoto || 'https://via.placeholder.com/40'}
                    alt={r.userName || 'User'}
                    className="w-10 h-10 rounded-full border-2 border-yellow-400 dark:border-pink-500"
                  />
                  <p className="font-semibold text-blue-900 dark:text-yellow-300 text-lg">
                    {r.userName || 'Anonymous'}
                  </p>
                </div>
                <p className="text-blue-800 dark:text-yellow-100 text-base leading-relaxed">{r.review}</p>
                <p className="text-sm text-blue-600 dark:text-pink-400 mt-2">
                  {r.createdAt ? new Date(r.createdAt).toLocaleString() : ''}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Review;

