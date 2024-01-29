// src/pages/Register.js
import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";
import { registerUser } from "../api/authService"; // Define registerUser function in authService.js

function Register() {
  const handleRegister = (credentials) => {
    registerUser(credentials)
      .then((response) => {
        // Handle successful register (e.g., save token, redirect to dashboard)
      })
      .catch((error) => {
        // Handle register error
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-left">Register</h2>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default Register;
