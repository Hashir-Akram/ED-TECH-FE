import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../axiosInstance";

const CourseDetail = () => {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get(`/courses/${id}/lessons`)
      .then((res) => setLessons(res.data))
      .catch((err) => alert("Could not load lessons"));
  }, [id]);

  return (
    <div>
      <h3>Lessons in Course #{id}</h3>
      {lessons.length === 0 ? <p>No lessons yet.</p> : (
        <ul className="list-group">
          {lessons.map(lesson => (
            <li key={lesson.id} className="list-group-item">
              <h5>{lesson.title}</h5>
              <p><strong>Video:</strong> <a href={lesson.video_url} target="_blank" rel="noreferrer">Watch</a></p>
              <p><strong>Question:</strong> {lesson.question}</p>
              <Link to={`/course/${id}/feedback?lesson_id=${lesson.id}`} className="btn btn-outline-primary mt-2">
                Submit Answer
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseDetail;
