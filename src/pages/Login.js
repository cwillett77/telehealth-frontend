import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import { loginUser } from "../api/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const handleLogin = (credentials) => {
    loginUser(credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate.push("/dashboard");
      })
      .catch((error) => {
        console.log("Login error: ", error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default Login;
