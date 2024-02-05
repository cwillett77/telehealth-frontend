import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout from context
    navigate("/"); // Then navigate
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {" "}
        {/* Container for inner content */}
        <Link className="navbar-brand" to="/">
          <img
            src="/img/logo-no-background.svg"
            alt="Telehealth"
            className="img-fluid"
            width="200"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            {isAuthenticated ? (
              <Link className="nav-item nav-link" to="/dashboard">
                Dashboard
              </Link>
            ) : (
              ""
            )}
            <Link className="nav-item nav-link" to="/doctors">
              Doctors
            </Link>
            <Link className="nav-item nav-link" to="/appointments">
              Appointments
            </Link>
          </div>
        </div>
        <div className="ml-auto d-flex align-items-center">
          {isAuthenticated ? (
            <>
              <div
                className="p-2 m-2 text-white"
                style={{ backgroundColor: "purple" }}
              >
                Logged in as {user.username}
              </div>
              <button
                className="btn btn-info n-2 my-2 my-sm-0 ml-3" // Increased margin-left for spacing
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-success m-2 my-sm-0">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-primary my-sm-0">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
