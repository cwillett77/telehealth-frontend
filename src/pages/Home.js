import React from "react";

const Home = () => {
  return (
    <div className="container">
      <main>
        <section className="text-center my-5">
          <h1>Welcome to Our Telehealth Service</h1>
          <p>Quality healthcare at your fingertips.</p>

          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4">
                <img
                  src="/img/featured1.jpg"
                  className="img-fluid rounded-lg shadow-sm"
                  alt="Telehealth"
                  width="360"
                />
              </div>
              <div className="col-lg-4">
                <img
                  src="/img/featured2.jpg"
                  className="img-fluid rounded-lg shadow-sm"
                  alt="Healthcare"
                  width="360"
                />
              </div>
              <div className="col-lg-4">
                <img
                  src="/img/featured3.jpg"
                  className="img-fluid rounded-lg shadow-sm"
                  alt="Consultation"
                  width="360"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="my-5">
          <h2>Our Features</h2>
          <div className="row">
            <b>Empowering Your Health with Advanced Technology</b>
            <p className="feature-text ml-2">
              At Telehealth, we redefine healthcare convenience. Our platform
              offers 24/7 Online Appointments allowing you to consult with top
              healthcare professionals at your convenience. Virtual Waiting
              Rooms ensure your privacy and comfort. Experience Seamless
              Prescription Management with our digital prescription tools.
              Health Record Integration ensures that your medical history is
              always at your doctor's fingertips, making each consultation as
              informed as possible.
            </p>
          </div>
        </section>

        <section className="my-5">
          <h2>What Our Users Say</h2>
          <div className="row">
            <b>Hear from Our Satisfied Users</b>
            <ul>
              <li>
                &quot;I've never felt more in control of my health. Booking
                appointments and consulting with doctors has never been
                easier.&quot; - Jane Doe.
              </li>
              <li>
                &quot;The flexibility and ease of access have made a huge
                difference to my family's healthcare.&quot; - John Smith.
              </li>
              <li>
                &quot;A game-changer for busy individuals; it's like having a
                doctor in your pocket.&quot; - Emily Johnson. Join our community
                and experience a new era of digital healthcare.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
