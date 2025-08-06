import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "student" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/auth/register", form);
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" className="form-control mb-2" placeholder="Name" onChange={handleChange} required />
        <input name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" className="form-control mb-2" placeholder="Password" onChange={handleChange} required />
        <select name="role" className="form-control mb-2" onChange={handleChange}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
