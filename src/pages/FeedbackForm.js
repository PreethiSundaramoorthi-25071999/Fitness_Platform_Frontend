
//latest 3
import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = ({ trainerId }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch feedbacks for the trainer
  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://fitness-platform-backend.onrender.com/api/feedback/${trainerId}`);
      setFeedbacks(response.data.feedbacks || []);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching feedback:", err);
      setError("Failed to load feedback.");
      setLoading(false);
    }
  };

  // Toggle feedback visibility
  const handleToggleFeedbacks = async () => {
    if (!isFeedbackVisible) {
      await fetchFeedbacks(); // Fetch feedbacks when toggling to show
    }
    setIsFeedbackVisible((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://fitness-platform-backend.onrender.com/api/feedback", {
        trainerId,
        rating: parseInt(rating, 10),
        comment,
      });
      alert("Feedback submitted successfully!");
      setRating("");
      setComment("");
      setIsFormVisible(false);

      // Refresh feedbacks after submission
      if (isFeedbackVisible) await fetchFeedbacks();
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback.");
    }
  };

  return (
    <div className="mt-4">
      {/* Feedback Form for the specific card */}
      {!isFormVisible ? (
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded transition"
          onClick={() => setIsFormVisible(true)}
        >
          Add Feedback
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded transition"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded transition"
              onClick={() => setIsFormVisible(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <button
        type="button"
        className="w-full mt-4 text-blue-500 hover:text-blue-700 underline"
        onClick={handleToggleFeedbacks}
      >
        {isFeedbackVisible ? "Hide Feedback" : "View Feedback"}
      </button>

      {/* Feedback List */}
      {isFeedbackVisible && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Feedback</h2>
          {loading ? (
            <div>Loading feedback...</div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : feedbacks.length === 0 ? (
            <div>No feedback available for this trainer.</div>
          ) : (
            <ul className="space-y-4">
              {feedbacks.map((feedback) => (
                <li
                  key={feedback._id}
                  className="p-4 border rounded-md shadow-sm bg-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Rating: {feedback.rating}/5</p>
                  </div>
                  <p className="mt-2">{feedback.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
