import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import axios from "../axiosInstance";

const Feedback = () => {
  const { id: courseId } = useParams();
  const [searchParams] = useSearchParams();
  const lessonId = searchParams.get("lesson_id");

  const [lesson, setLesson] = useState({});
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false); // <-- NEW

  useEffect(() => {
    axios.get(`/courses/${courseId}/lessons`)
      .then((res) => {
        const lessonData = res.data.find(l => l.id === parseInt(lessonId));
        setLesson(lessonData || {});
      })
      .catch(() => alert("Could not load lesson"));
  }, [courseId, lessonId]);

  const submitAnswer = async () => {
    if (!answer.trim()) return;

    setLoading(true); // Show spinner
    setFeedback("");  // Clear previous feedback

    try {
      const res = await axios.post(`/lessons/${lessonId}/submit-answer`, {
        student_answer: answer
      });
      setFeedback(res.data.feedback);
    } catch (err) {
      alert("⚠️ Error generating feedback");
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="col-md-8 offset-md-2 mt-4">
      <h3>Lesson: {lesson.title}</h3>
      <p><strong>Question:</strong> {lesson.question}</p>

      <textarea
        className="form-control mb-3"
        rows="5"
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        disabled={loading}
      />

      <button className="btn btn-success mb-3" onClick={submitAnswer} disabled={loading}>
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" />
            Evaluating...
          </>
        ) : (
          "Submit Answer"
        )}
      </button>

      {feedback && (
        <div className="alert alert-info">
          <strong>AI Feedback:</strong> {feedback}
        </div>
      )}
    </div>
  );
};

export default Feedback;
