import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-center">
      <div className="container p-4">
        <div className="d-flex justify-content-center">
          {" "}
          {/* Flexbox container */}
          <Link className="mx-2" to="/about-us">
            About Us
          </Link>
          <Link className="mx-2" to="/contact-us">
            Contact Us
          </Link>
          <Link className="mx-2" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="mx-2" to="/terms-of-service">
            Terms of Service
          </Link>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; 2024 Telehealth, Inc.
      </div>
    </footer>
  );
};

export default Footer;
