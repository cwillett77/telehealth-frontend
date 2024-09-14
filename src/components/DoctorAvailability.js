import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
const apiHostname = process.env.REACT_APP_API_HOSTNAME;
const apiPort = process.env.REACT_APP_API_PORT;
const baseURL = `http://${apiHostname}:${apiPort}/api`;

const formatDateTimeToLocal = (utcDateTime) => {
  const localDate = new Date(utcDateTime);
  return localDate.toLocaleString(); // This will convert to local time
};

const DoctorAvailability = () => {
  const [availabilities, setAvailabilities] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedAvailability, setEditedAvailability] = useState(null);

  const { user } = useAuth();
  const userId = user.id; // Retrieve the doctor's ID

  const fetchAvailabilities = useCallback(async () => {
    try {
      const response = await axios.get(
        `${baseURL}/booking/availabilities/?doctor_id=${userId}`
      );
      setAvailabilities(response.data);
    } catch (error) {
      console.error("Couldn't fetch availabilities", error);
    }
  }, [userId]);

  useEffect(() => {
    fetchAvailabilities();
  }, [fetchAvailabilities]);

  const handleEditClick = (availability) => {
    setEditedAvailability(availability);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Make an API call to update availability in the backend
    if (editedAvailability) {
      axios
        .put(
          `${baseURL}/booking/availabilities/${userId}/${editedAvailability.id}/`,
          {
            start_time: editedAvailability.start_time,
            end_time: editedAvailability.end_time,
          }
        )
        .then(() => {
          setIsEditing(false);
          setEditedAvailability(null);
          fetchAvailabilities();
        })
        .catch((error) => {
          console.error("Couldn't update availability", error);
        });
    }
  };

  const handleDeleteClick = (availabilityId) => {
    // Make an API call to delete availability in the backend
    axios
      .delete(`${baseURL}/booking/availabilities/${userId}/${availabilityId}/`)
      .then(() => {
        // Remove the deleted availability from the UI
        setAvailabilities(
          availabilities.filter((avail) => avail.id !== availabilityId)
        );
      })
      .catch((error) => {
        console.error("Couldn't delete availability", error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Convert local datetimes to ISO string format (UTC)
      const startDateTime = new Date(startTime).toISOString();
      const endDateTime = new Date(endTime).toISOString();
      await axios.post(`${baseURL}/booking/availabilities/`, {
        doctor: userId,
        start_time: startDateTime,
        end_time: endDateTime,
      });
      fetchAvailabilities(); // Re-fetch the data to update the state
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
        <button className="btn btn-primary m-2" type="submit">
          Add Availability
        </button>
      </form>
      <br />
      <h4 className="mt-4">Your Availability Slots:</h4>
      <ul className="list-group">
        {availabilities.map((availability) => (
          <li key={availability.id} className="list-group-item">
            {isEditing && editedAvailability?.id === availability.id ? (
              <>
                <input
                  type="datetime-local"
                  value={editedAvailability.start_time}
                  onChange={(e) =>
                    setEditedAvailability({
                      ...editedAvailability,
                      start_time: e.target.value,
                    })
                  }
                />
                <input
                  type="datetime-local"
                  value={editedAvailability.end_time}
                  onChange={(e) =>
                    setEditedAvailability({
                      ...editedAvailability,
                      end_time: e.target.value,
                    })
                  }
                />
                <button
                  className="btn btn-primary btn-sm ms-2"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {formatDateTimeToLocal(availability.start_time)} to{" "}
                {formatDateTimeToLocal(availability.end_time)}
                <button
                  className="btn btn-primary btn-sm ms-2"
                  onClick={() => handleEditClick(availability)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleDeleteClick(availability.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorAvailability;
