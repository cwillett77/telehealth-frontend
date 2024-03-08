import React, { useState, useEffect } from "react";
import Calendar from "react-calendar"; // Assuming you add this package
import "react-calendar/dist/Calendar.css"; // Default styling, customize as needed
import axios from "axios";

const AvailabilityCalendar = ({ userId, userRole }) => {
  const [date, setDate] = useState(new Date());
  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    // Fetch availability for the selected date
    const fetchAvailabilities = async () => {
      // Example API call, adjust endpoint as needed
      const baseURL = `${process.env.REACT_APP_API_HOSTNAME}:${process.env.REACT_APP_API_PORT}/api/booking/availabilities/`;
      try {
        const response = await axios.get(
          `${baseURL}?doctor_id=${userId}&date=${date.toISOString()}`
        );
        setAvailabilities(response.data);
      } catch (error) {
        console.error("Error fetching availabilities:", error);
      }
    };
    fetchAvailabilities();
  }, [date, userId]);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
        // Add additional props for customizing the calendar here
      />
      {/* Display availabilities here. This will depend on how your API returns data and your app's requirements. */}
    </div>
  );
};

export default AvailabilityCalendar;
