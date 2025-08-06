import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axiosInstance";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("/courses/")
      .then((res) => setCourses(res.data))
      .catch((err) => alert("Failed to load courses"));
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div className="col-md-4" key={course.id}>
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link className="btn btn-primary w-100" to={`/course/${course.id}`}>
                  View Lessons
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
