import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { formatDateTime } from "../utils/datetimeUtils";
const apiHostname = process.env.REACT_APP_API_HOSTNAME;
const apiPort = process.env.REACT_APP_API_PORT;
const baseURL = `http://${apiHostname}:${apiPort}/api`;

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/accounts/doctors/${id}/`)
      .then((response) => {
        setDoctor(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });

    // Fetch doctor availabilities
    axios
      .get(`${baseURL}/booking/availabilities/?doctor_id=${id}`)
      .then((response) => {
        setAvailabilities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctor availabilities:", error);
      });
  }, [id]);

  return (
    <div className="container">
      <main>
        <section className="my-5">
          <h1>Doctor Details</h1>
          <Link to="/">Back to Doctors List</Link>
          {doctor ? (
            <div className="m-6">
              <h2>
                Dr. {doctor.first_name} {doctor.last_name}
              </h2>
              <p>Email: {doctor.email}</p>
              <p>Specialization: {doctor.specialization}</p>
              <p>Credentials: {doctor.credentials}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}

          <h3>Availabilities:</h3>
          <ul>
            {availabilities.map((availability, index) => (
              <li key={index}>
                {formatDateTime(availability.start_time)} to{" "}
                {formatDateTime(availability.end_time)}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DoctorDetails;
