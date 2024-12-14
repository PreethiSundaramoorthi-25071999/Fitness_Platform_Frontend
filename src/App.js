import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import TrainerProfile from './pages/TrainerProfile';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Logout from './pages/Logout';
import BookaClass from './pages/BookaClass';
import TrainerDashboard from './pages/TrainerDashboard';
import MemberDashboard from './pages/MemberDashboard';
import ClassRecommendation from "./pages/ClassRecommendation";
import ScheduleForm from './pages/ScheduleForm';
import ScheduleList from './pages/ScheduleList';



function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Nested routes for /dashboard */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="trainers" element={<TrainerProfile />} />
            <Route path="logout" element={<Logout />} /> 
          </Route>
          
          {/* Nested routes for /dashboard */}
          <Route path="/TrainerDashboard" element={<TrainerDashboard />}> 
              {/* Default route (index) loads BookaClass */}
              <Route index element={<BookaClass />} />
              <Route path="bookaclass" element={<BookaClass />} />
              <Route path="ScheduleList" element={<ScheduleList />} /> 
              <Route path="ScheduleForm" element={<ScheduleForm />} />
              <Route path="logout" element={<Logout />} /> 
          </Route>  

          {/* Nested routes for /dashboard */}
          <Route path="/MemberDashboard" element={<MemberDashboard />}>
            {/* Default route (index) loads BookaClass */}
            <Route index element={<BookaClass />} />
            <Route path="logout" element={<Logout />} /> 
            <Route path="bookaclass" element={<BookaClass />} />
            <Route path="trainers" element={<TrainerProfile />} />
            <Route path="classPreferences" element={<ClassRecommendation />} />
            <Route path="ScheduleForm" element={<ScheduleForm />} /> 
            <Route path="ScheduleList" element={<ScheduleList />} /> 
          </Route>

        </Routes>
      </div>


    </Router>
  );
}

export default App;



