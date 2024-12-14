import React from 'react';

const ScheduleCard = ({ schedule, onDelete, onUpdate }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">{schedule.classType}</h3>
      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-medium text-gray-800">Date:</span> {new Date(schedule.date).toLocaleDateString()}
        </p>
        <p>
          <span className="font-medium text-gray-800">Duration:</span> {schedule.duration} hours
        </p>
        <p>
          <span className="font-medium text-gray-800">Capacity:</span> {schedule.capacity}
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => onUpdate(schedule)}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        >
          Reschedule
        </button>
        <button
          onClick={() => onDelete(schedule._id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ScheduleCard;
