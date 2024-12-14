
//next
import React, { useState } from "react";
import axios from "axios";

const ClassRecommendation = ({ userId }) => {
  const [preference, setPreference] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!preference) {
      alert("Please select a preference.");
      return;
    }

    try {
      const response = await axios.post(
        "https://fitness-platform-backend.onrender.com/api/preference/recommendations",
        { preference, userId }
      );
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-6">Class Recommendations</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="preference" className="block text-xl font-medium text-gray-700">
            Select Your Fitness Goal
          </label>
          <select
            id="preference"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
          >
            <option value="" disabled>Select a preference</option>
            <option value="Weight Gain">Weight Gain</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="To Maintain Fitness">To Maintain Fitness</option>
            <option value="To Reduce Stress">To Reduce Stress</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded transition text-base font-semibold"
        >
          Get Recommendations
        </button>
      </form>
      {recommendations.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Recommended Classes:</h3>
          <ul className="list-disc pl-8 space-y-2">
            {recommendations.map((className, index) => (
              <li key={index} className="text-black text-base">{className}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClassRecommendation;



