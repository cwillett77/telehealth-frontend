import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
