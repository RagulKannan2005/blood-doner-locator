import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import "../pages/doner.css";

const Doner = () => {
  const [donorList, setDonorList] = useState([]);

  useEffect(() => {
    // Fetch all donors from localStorage
    const donors = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("donor-")) {
        const donorData = JSON.parse(localStorage.getItem(key));
        donors.push({ id: key, ...donorData });
      }
    }
    setDonorList(donors);
  }, []);

  return (
    <>
      <Navbar />
      <div className="donor-list-container">
        <h2>Donor List</h2>
        {donorList.length > 0 ? (
          <ul className="donor-list">
            {donorList.map((donor) => (
              <li key={donor.id} className="donor-item">
                <h3>{donor.fname} {donor.lname}</h3>
                <p>Email: {donor.email}</p>
                <p>Phone: {donor.phone}</p>
                <p>Blood Group: {donor.bloodGroup}</p>
                <p>Gender: {donor.gender}</p>
                <p>Date of Birth: {donor.dateOfBirth}</p>
                <p>Test Center Ref: {donor.testCenterRef}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No donors registered yet.</p>
        )}
      </div>
    </>
  );
};

export default Doner;
