import React, { useState } from "react";

function RegisterForm({ onRegister }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    userType: "patient",
    specialization: "",
    credentials: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(credentials);
  };

  const handleUserTypeChange = (event) => {
    setCredentials({ ...credentials, userType: event.target.value });
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

        <div
          className="btn-group mb-2"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            id="patient"
            name="userType"
            value="patient"
            className="btn-check"
            checked={credentials.userType === "patient"}
            onChange={handleUserTypeChange}
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="patient">
            Patient
          </label>

          <input
            type="radio"
            id="doctor"
            name="userType"
            value="doctor"
            className="btn-check"
            checked={credentials.userType === "doctor"}
            onChange={handleUserTypeChange}
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="doctor">
            Doctor
          </label>
        </div>

        {credentials.userType === "doctor" && (
          <>
            <textarea
              name="specialization"
              placeholder="Specialization"
              value={credentials.specialization}
              onChange={handleChange}
            />

            <textarea
              name="credentials"
              placeholder="Credentials"
              value={credentials.credentials}
              onChange={handleChange}
            />
          </>
        )}
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
