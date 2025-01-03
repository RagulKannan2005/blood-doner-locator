import React, { useState } from "react";
import "./cssfiles/Register.css";

const Registerform = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    password: "",
    rePassword: "",
    email: "",
    phone: "",
    bloodGroup: "",
    gender: "",
    dateOfBirth: "",
    testCenterRef: "", // Added field for Test Center reference number
  });

  const [error, setError] = useState(""); // To hold error messages for password mismatch

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password and rePassword match
    if (formData.password !== formData.rePassword) {
      setError("Passwords do not match!");
      return;
    }

    // Generate unique ID for the donor with "donor-id-" prefix
    const donorId = `donor-${Date.now()}`; // Unique ID based on timestamp with prefix

    // Store the form data in local storage under the unique donor ID
    localStorage.setItem(donorId, JSON.stringify(formData));

    // Clear the form data after submission (optional)
    setFormData({
      fname: "",
      lname: "",
      password: "",
      rePassword: "",
      email: "",
      phone: "",
      bloodGroup: "",
      gender: "",
      dateOfBirth: "",
      testCenterRef: "", // Reset the Test Center reference field
    });

    alert("Registration successful! Your details are saved.");
    setError(""); // Clear any previous errors
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Donor Register Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="fname">Full Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Enter your Fullname"
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <label htmlFor="rePassword">Re-Password</label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              placeholder="Enter your password again"
            />
            {error && <p className="error-message">{error}</p>} {/* Show error message if passwords don't match */}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email id"
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            <label htmlFor="bloodGroup">Select Your Blood Group</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select your blood group
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <label htmlFor="gender" className="gender" style={{fontWeight:600}}>Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="dateOfBirth">Date Of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            <label htmlFor="testCenterRef">Attach your Test center ref number</label>
            <input
              type="text"
              id="testCenterRef"
              name="testCenterRef"
              value={formData.testCenterRef}
              onChange={handleChange}
              placeholder="Enter your test center reference number"
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
