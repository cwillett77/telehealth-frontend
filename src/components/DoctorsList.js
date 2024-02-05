import React, { useState, useEffect } from "react";
import axios from "axios";

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors from the backend
    axios
      .get("http://localhost:8000/api/accounts/doctors/")
      .then((response) => {
        console.log(response.data);
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Couldn't fetch doctors", error);
      });
  }, []);

  return (
    <div>
      <h1>List of Doctors</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <a href={`/doctor-details/${doctor.id}`}>
              {doctor.first_name} {doctor.last_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorsList;
