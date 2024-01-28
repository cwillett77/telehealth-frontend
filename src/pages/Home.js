// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <header className="py-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Telehealth
          </Link>
          {/* Navigation Links */}
        </nav>
      </header>
      <main>
        <section className="text-center my-5">
          <h1>Welcome to Our Telehealth Service</h1>
          <p>Quality healthcare at your fingertips.</p>
          {/* Sample Images */}
          {/* <img src="path_to_image_1" className="img-fluid" alt="Telehealth" />
          <img src="path_to_image_2" className="img-fluid" alt="Consultation" />
          <img src="path_to_image_3" className="img-fluid" alt="Healthcare" /> */}
        </section>
        <section className="my-5">
          <h2>Our Features</h2>
          <div className="row">{/* Feature list using Bootstrap cards */}</div>
        </section>
        <section className="my-5">
          <h2>What Our Users Say</h2>
          <div className="row">{/* Testimonials */}</div>
        </section>
      </main>
      <footer className="text-center py-3">{/* Footer content */}</footer>
    </div>
  );
};

export default Home;
