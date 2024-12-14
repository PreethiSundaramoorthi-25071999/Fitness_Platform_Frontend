import React, { useState, useEffect } from "react";
import axios from "axios";
import ScheduleCard from "../pages/ScheduleCard";
import UpdateModal from "./ScheduleUpdateModal ";


const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null); // Track schedule to update
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  const fetchSchedules = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/schedule");
      setSchedules(response.data.schedules || []);
    } catch (err) {
      console.error("Error fetching schedules:", err);
    }
  };

  // Fetch schedules on component mount
  useEffect(() => {
    fetchSchedules();
  }, []); // Add empty dependency array to avoid continuous fetching

  // Handle schedule deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/schedule/${id}`);
      fetchSchedules();
      alert("Schedule deleted successfully!");
    } catch (err) {
      console.error("Error deleting schedule:", err);
      alert("Failed to delete schedule.");
    }
  };

  const handleUpdate = async (updatedData) => {
    try {
       await axios.put(`http://localhost:5001/api/schedule/${selectedSchedule._id}`, updatedData);
      fetchSchedules();
      alert("Schedule updated successfully!");
      setIsModalOpen(false);
      setSelectedSchedule(null);
    } catch (err) {
      console.error("Error updating schedule:", err);
      alert("Failed to update schedule.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">Scheduled Classes</h2>
      <div>
        {schedules.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedules.map((schedule) => (
              <ScheduleCard
                key={schedule.id}
                schedule={schedule}
                onDelete={(id) => handleDelete(id)}
                onUpdate={(schedule) => {
                    setSelectedSchedule(schedule);
                    setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No schedules available.</p>
        )}
      </div>
      {isModalOpen && (
        <UpdateModal
          schedule={selectedSchedule}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ScheduleList;
