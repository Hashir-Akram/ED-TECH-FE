import React, { useState } from "react";
import axios from "../axiosInstance";

const Chatbot = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me about courses or lessons." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // <-- NEW

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setLoading(true); // Show spinner while waiting

    try {
      const res = await axios.get("/chatbot", { params: { query: input } });
      setMessages((msgs) => [...msgs, { sender: "bot", text: res.data.response }]);
    } catch {
      setMessages((msgs) => [...msgs, { sender: "bot", text: "⚠️ Error fetching data." }]);
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", width: "300px", zIndex: 9999 }}>
      {show ? (
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white d-flex justify-content-between">
            <span>Course Assistant</span>
            <button className="btn btn-sm btn-light" onClick={() => setShow(false)}>×</button>
          </div>
          <div className="card-body" style={{ height: "300px", overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.sender === "user" ? "text-end" : ""}`}>
                <div className={`p-2 rounded ${msg.sender === "user" ? "bg-light" : "bg-info text-white"}`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Spinner while waiting */}
            {loading && (
              <div className="text-center my-2">
                <div className="spinner-border text-primary spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>

          <div className="card-footer d-flex">
            <input
              className="form-control me-2"
              placeholder="Type here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
            />
            <button className="btn btn-success" onClick={sendMessage} disabled={loading}>
              ➤
            </button>
          </div>
        </div>
      ) : (
        <button className="btn btn-primary rounded-circle p-3" onClick={() => setShow(true)}>💬</button>
      )}
    </div>
  );
};

export default Chatbot;
