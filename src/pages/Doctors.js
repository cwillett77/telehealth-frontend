import React from "react";
import DoctorsList from "../components/DoctorsList";

const Doctors = () => {
  return (
    <div className="container">
      <main>
        <section className="my-5">
          <DoctorsList />
        </section>
      </main>
    </div>
  );
};

export default Doctors;
