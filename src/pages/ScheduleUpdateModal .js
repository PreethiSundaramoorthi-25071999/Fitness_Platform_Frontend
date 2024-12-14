import React, { useState } from "react";

const UpdateModal = ({ schedule, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    _id: schedule._id,
    classType: schedule.classType,
    date: new Date(schedule.date).toISOString().split("T")[0], // Pre-fill the date in YYYY-MM-DD format
    duration: schedule.duration,
    capacity: schedule.capacity,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-bold mb-4">Update Schedule</h3>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
           <label className="block font-bold mb-1">Class Type</label>
        <select
            name="classType"
            value={formData.classType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
           >
           <option value="" disabled>Select a class type</option>
           <option value="Yoga">Yoga</option>
           <option value="Strength Training">Strength Training</option>
           <option value="Cardio">Cardio</option>
           <option value="Pilates">Pilates</option>
           <option value="HIIT">HIIT</option>
           <option value="Zumba">Zumba</option>
           <option value="Kickboxing">Kickboxing</option>
           <option value="Body Pump">Body Pump</option>
           <option value="Aqua Aerobics">Aqua Aerobics</option>
           <option value="Meditation">Meditation</option>
        </select>
        </div>

          <div className="mb-4">
            <label className="block font-bold mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Duration (hours)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Capacity</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
