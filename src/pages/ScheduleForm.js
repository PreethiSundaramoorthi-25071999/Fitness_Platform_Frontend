
//next
import React, { useState } from 'react';
import axios from 'axios';

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    date: '',
    duration: '',
    capacity: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/schedule/create', formData);
      alert('Schedule Created Successfully! Check "My Bookings" page to view the schedules');
      console.log(response.data);
    } catch (err) {
      console.error(err);
      alert('Failed to create schedule.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 w-1/2 left-96 top-32 absolute">
      <h2 className="text-xl font-bold text-center">Create Schedule</h2>
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full p-2 border rounded bg-gray-50"
      >
        <option value="" disabled>
          Select Class Type
        </option>
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
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="duration"
        placeholder="Duration (hours)"
        value={formData.duration}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="capacity"
        placeholder="Capacity"
        value={formData.capacity}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        Create Schedule
      </button>
    </form>
  );
};

export default ScheduleForm;
