import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import "../pages/doner.css"


const Doner = () => {
  const [donorData, setDonorData] = useState([]);

  // Fetch the donor data from localStorage and display it
  useEffect(() => {
    const storedData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("donor-id-")) {
        const data = JSON.parse(localStorage.getItem(key));
        storedData.push({ ...data, donorId: key }); // Add donorId to the data
      }
    }
    setDonorData(storedData);
  }, []);

  return (
    <>
      <Navbar />
      <h2>Donor List</h2>
      {donorData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Donor ID</th>
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
            {donorData.map((donor) => (
              <tr key={donor.donorId}>
                <td>{donor.donorId}</td>
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
        <p>No donor data found</p>
      )}
    </>
  );
};

export default Doner;

