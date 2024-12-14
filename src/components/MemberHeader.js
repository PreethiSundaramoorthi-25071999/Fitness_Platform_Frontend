import React from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell } from "react-icons/fa6"; // Import the dumbbell icon
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { FaRegHandshake } from "react-icons/fa6";
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlineSportsGymnastics } from "react-icons/md";

const MemberHeader = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <FaDumbbell className="mr-2" /> {/* Dumbbell icon with margin */}
          <Link to="/">Fitness Platform</Link>
        </h1>
        <nav className="flex items-center">
        <Link to="BookaClass" className="mr-8 flex items-center">
            <MdOutlineSportsGymnastics className="m-px mx-1.5 text-white"/>  
          Classes
          </Link>
        <Link to="trainers" className="mr-8 flex items-center">
            <SlPeople className="m-px mx-1.5 text-white"/>
            View Trainers
        </Link>
        <Link to="ScheduleForm" className="mr-8 flex items-center">
            <TbCalendarTime className="m-px mx-1.5 text-white"/>
            Schedule Class
        </Link>
        <Link to="ScheduleList" className="mr-8 flex items-center">
            <FaRegBookmark className="m-px mx-1.5 text-white"/>
            My Bookings
        </Link>
        <Link to="classPreferences" className="mr-8 flex items-center">
            <FaRegHandshake className="m-px mx-1.5 text-white"/>
            Class Recommendation
        </Link>
        {/* <Link to="bookings" className="mr-8 flex items-center">
            <FaRegBookmark className="m-px mx-1.5 text-white text-sm"/>
          My Bookings
        </Link> */}
        <Link to="logout" className="mr-8 flex items-center">
            <MdOutlineLogout className="m-px mx-1.5 text-white"/>
          Logout
          </Link>  
        </nav>
      </div>
    </header>

  );
};

export default MemberHeader;
