import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import "../components/cssfiles/Seekerpage.css";
import { Link } from "react-router-dom";

const Seekerpage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Retrieve saved blood requests from localStorage when the component mounts
    const storedRequests = JSON.parse(localStorage.getItem("seekerRequests") || "[]");
    setRequests(storedRequests); // Set the retrieved data to the state
  }, []);

  return (
    <>
      <Navbar />
      <div className="seeker-page-container">
        <h1>Blood Seeker Portal</h1>

        {requests.length > 0 ? (
          <table className="requests-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Phone Number</th>
                <th>Blood Group</th>
                <th>Urgency</th>
                <th>Hospital/Center</th>
                <th>Location</th>
                <th>Date Needed</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>{request.name}</td>
                  <td>{request.phone}</td>
                  <td>{request.bloodGroup}</td>
                  <td>{request.urgency}</td>
                  <td>{request.hospital}</td>
                  <td>{request.location}</td>
                  <td>{request.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No blood requests submitted yet.</p>
        )}
      </div>
    </>
  );
};

export default Seekerpage;
