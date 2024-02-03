import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const DoctorAvailability = () => {
  const [availabilities, setAvailabilities] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const { user } = useAuth(); // Assuming useAuth gives you the logged-in user's information
  const userId = user.id; // Retrieve the doctor's ID

  const fetchAvailabilities = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/booking/availabilities/?doctor=${userId}`
    );
    setAvailabilities(response.data);
  };

  useEffect(() => {
    fetchAvailabilities();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/booking/availabilities/",
        {
          doctor: userId,
          start_time: startTime,
          end_time: endTime,
        }
      );
      setAvailabilities([...availabilities, response.data]);
      //   setDoctorId("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.error("Couldn't add availability", error);
    }
  };

  return (
    <div>
      <h4 className="mt-4">Manage Your Availability</h4>
      <form onSubmit={handleSubmit}>
        <div className="ml-auto d-flex align-items-center">
          <label>
            Start Time:
            <input
              className="m-2"
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>
        </div>
        <div className="ml-auto d-flex align-items-center">
          <label>
            End Time:
            <input
              className="m-2"
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
        </div>
        <button className="mt-2" type="submit">
          Add Availability
        </button>
      </form>
      <br />
      <h4 className="mt-4">Your Availability Slots:</h4>
      <ul>
        {availabilities.map((availability) => (
          <li
            key={availability.id}
          >{`${availability.start_time} to ${availability.end_time}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorAvailability;
