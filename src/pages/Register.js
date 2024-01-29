import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/Auth/RegisterForm";
import { registerUser } from "../api/authService";

function Register() {
  const navigate = useNavigate();

  const handleRegister = async (credentials) => {
    try {
      const response = await registerUser(credentials);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.token); // Save token to local storage
        navigate.push("/dashboard"); // Redirect to dashboard or any other page
      } else if (response.status === 400) {
        console.error(
          "Bad Request, please check your payload for valid key/value pairs."
        );
      }
    } catch (error) {
      console.error("Registration failed: ", error.response?.data || error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-left">Register</h2>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default Register;
