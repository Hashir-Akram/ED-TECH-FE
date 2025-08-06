import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CourseDetail from "./pages/CourseDetail";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Navbar";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/course/:id/feedback" element={<Feedback />} />
        </Routes>
      </div>
      <Chatbot />
    </Router>
  );
}

export default App;
