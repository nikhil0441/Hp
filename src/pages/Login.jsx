// src/pages/Login.jsx
import React from "react";
import "../css/Login.css"; // move your CSS to this file
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero">
      <form className="main">
        <h1>Login</h1>

        <div className="input_box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>

        <div className="input_box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember_me">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
