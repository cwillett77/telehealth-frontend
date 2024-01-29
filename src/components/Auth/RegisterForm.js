import React, { useState } from "react";

function RegisterForm({ onRegister }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(credentials);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4">
        <input
          type="text"
          name="username"
          className="form-control mb-3"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="text"
          name="email"
          className="form-control mb-3"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="firstName"
          className="form-control mb-3"
          value={credentials.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          className="form-control mb-3"
          value={credentials.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
