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
          <table className="donor-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Blood Group</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Test Center Ref</th>
              </tr>
            </thead>
            <tbody>
              {donorList.map((donor) => (
                <tr key={donor.id}>
                  <td>{donor.fname} {donor.lname}</td>
                  <td>{donor.email}</td>
                  <td>{donor.phone}</td>
                  <td>{donor.bloodGroup}</td>
                  <td>{donor.gender}</td>
                  <td>{donor.dateOfBirth}</td>
                  <td>{donor.testCenterRef}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No donors registered yet.</p>
        )}
      </div>
    </>
  );
};

export default Doner;
