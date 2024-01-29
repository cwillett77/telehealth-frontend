import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, username, onLogout }) => {
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
            <Link className="nav-item nav-link" to="/doctors">
              Doctors
            </Link>
            <Link className="nav-item nav-link" to="/patients">
              Patients
            </Link>
            <Link className="nav-item nav-link" to="/appointments">
              Appointments
            </Link>
          </div>
        </div>
        <div className="ml-auto">
          {/* Use ml-auto for alignment */}
          {isAuthenticated ? (
            <div className="form-inline my-2 my-lg-0">
              <div className="p-2 bg-dark text-white">
                Logged in as {username}
              </div>
              <button
                className="btn btn-info my-2 my-sm-0 ml-2"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-success my-2 my-sm-0 mr-6">
                  Login
                </button>
              </Link>{" "}
              <Link to="/register">
                <button className="btn btn-primary my-2 my-sm-0 ml-2">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
