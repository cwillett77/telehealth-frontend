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

  // Function to replace newline characters with <br> tags
  const renderWithLineBreaks = (text) => {
    return text.split("<br>").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="container">
      <main>
        <section className="my-5">
          <h1>Doctor Details</h1>
          <Link to="/doctors">Back to Doctors List</Link>
          {doctor ? (
            <div className="row mt-5">
              <div className="col-lg-5">
                <img
                  src={`/img/${doctor.first_name}-${doctor.last_name}.jpg`}
                  className="img-fluid rounded shadow-sm"
                  style={{ border: "2px #f98f7c solid", marginBottom: "20px" }}
                  alt="stockking"
                  width="480"
                />
              </div>
              <div className="col-lg-5">
                <h2>
                  Dr. {doctor.first_name} {doctor.last_name}
                </h2>
                <p>
                  <span className="bold">Email:</span> {doctor.email}
                </p>
                <p>
                  <b>Specialization:</b> {doctor.specialization}
                </p>
                <p>
                  <b>Credentials:</b>
                  <br />
                  {renderWithLineBreaks(doctor.credentials)}
                </p>
              </div>
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
