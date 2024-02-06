import React, { useState, useEffect } from "react";
import axios from "axios";
const apiHostname = process.env.REACT_APP_API_HOSTNAME;
const apiPort = process.env.REACT_APP_API_PORT;
const baseURL = `http://${apiHostname}:${apiPort}/api`;

function DoctorsList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the list of doctors from the backend
    axios
      .get(`${baseURL}/accounts/doctors/`)
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
              Dr. {doctor.first_name} {doctor.last_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorsList;
