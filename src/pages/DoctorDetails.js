import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const apiHostname = process.env.REACT_APP_API_HOSTNAME;
const apiPort = process.env.REACT_APP_API_PORT;
const baseURL = `http://${apiHostname}:${apiPort}/api`;

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/accounts/doctor-details/${id}/`).then((response) => {
      setDoctor(response.data);
    });
  }, [id]);

  return (
    <div className="container">
      <main>
        <section className="my-5">
          <Link to="/">Back to Doctors List</Link>
          {doctor ? (
            <div className="m-6">
              <h2>{doctor.username}</h2>
              <p>Email: {doctor.email}</p>
              <p>Specialization: {doctor.specialization}</p>
              <p>Credentials: {doctor.credentials}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default DoctorDetails;
