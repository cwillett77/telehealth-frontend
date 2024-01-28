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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        name="email"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="firstName"
        value={credentials.username}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lasstName"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
