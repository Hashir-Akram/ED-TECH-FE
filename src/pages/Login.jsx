import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/auth/login", form);
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("role", res.data.role);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" className="form-control mb-2" placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
