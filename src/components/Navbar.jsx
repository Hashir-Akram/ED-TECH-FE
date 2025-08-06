import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand" to="/">EdTech</Link>
      <div className="ml-auto">
        <Link className="btn btn-light me-2" to="/login">Login</Link>
        <Link className="btn btn-warning" to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
