import React from "react";

const Appointments = () => {
  return (
    <div className="container">
      <main>
        <h1>Appointments</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Doctor</th>
              <th>Patient</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022-03-15</td>
              <td>Dr. Smith</td>
              <td>Patient A</td>
              <td>10:00 AM</td>
            </tr>
            <tr>
              <td>2022-03-16</td>
              <td>Dr. Johnson</td>
              <td>Patient B</td>
              <td>2:30 PM</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Appointments;
