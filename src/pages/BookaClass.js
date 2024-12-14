
// //new
// import React, { useEffect, useState } from 'react';
// import { CiTimer } from 'react-icons/ci';
// import { MdOutlineReduceCapacity } from 'react-icons/md';
// import { BsFillPeopleFill } from 'react-icons/bs';

// function BookaClass() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch bookings from the backend
//   useEffect(() => {
//     fetch('http://localhost:5001/api/bookings') // Update with your backend URL
//       .then((response) => response.json())
//       .then((data) => {
//         setBookings(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching bookings:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p className="text-center">Loading classes...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">Available Classes</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {bookings.map((classItem, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
//             <img
//               src={classItem.imageUrl} // Use the imageUrl from backend
//               alt={classItem.type}
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-xl font-semibold mb-2">{classItem.type}</h2>
//             <p className="font-semibold text-gray-600 mb-1 flex items-center">
//               <CiTimer className="mr-2" /> Duration: {classItem.duration}
//             </p>
//             <p className="font-semibold text-gray-600 mb-1 flex items-center">
//               <MdOutlineReduceCapacity className="mr-2" /> Capacity: {classItem.capacity}
//             </p>
//             <p className="font-semibold text-gray-600 mb-1 flex items-center">
//               <BsFillPeopleFill className="mr-2" /> Available Spots: {classItem.availableSpots}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BookaClass;


// latest
import React, { useEffect, useState } from 'react';
import { CiTimer } from 'react-icons/ci';
import { MdOutlineReduceCapacity } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

function BookaClass() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings from the backend
  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/bookings'); // Backend URL
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) {
    return <p className="text-center">Loading classes...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((classItem) => (
          <div key={classItem._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <img
              src={classItem.imageUrl}
              alt={classItem.type}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{classItem.type}</h2>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <CiTimer className="mr-2" /> Duration: {classItem.duration}
            </p>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <MdOutlineReduceCapacity className="mr-2" /> Capacity: {classItem.capacity}
            </p>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <BsFillPeopleFill className="mr-2" /> Available Spots: {classItem.availableSpots}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookaClass;
