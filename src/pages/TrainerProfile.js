


// new
import React, { useState, useEffect } from "react";
import axios from "axios";
import FeedbackForm from "./FeedbackForm";

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/trainers");
        setTrainers(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };
    fetchTrainers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Trainers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <div
            key={trainer._id}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={trainer.imageUrl}
              alt={trainer.name}
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 text-center">{trainer.name}</h3>
            <p className="text-gray-600 text-sm text-center">{trainer.expertise}</p>
            <FeedbackForm trainerId={trainer._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerList;


