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
    testCenterRef: "",
  });

  const [error, setError] = useState(""); // For general errors
  const [successMessage, setSuccessMessage] = useState(""); // For success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { fname, lname, password, rePassword, email, phone, bloodGroup, gender, dateOfBirth } = formData;

    if (!fname || !lname) {
      return "First name and last name are required.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    if (password !== rePassword) {
      return "Passwords do not match.";
    }

    if (!email.includes("@")) {
      return "Invalid email address.";
    }

    if (phone.length !== 10) {
      return "Phone number must be exactly 10 digits.";
    }

    if (!bloodGroup) {
      return "Please select a blood group.";
    }

    if (!gender) {
      return "Please select your gender.";
    }

    if (!dateOfBirth) {
      return "Please provide your date of birth.";
    }

    return null; // No errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      setSuccessMessage("");
      return;
    }

    // Generate unique ID for the donor with "donor-id-" prefix
    const donorId = `donor-${Date.now()}`;

    // Store the form data in local storage under the unique donor ID
    localStorage.setItem(donorId, JSON.stringify(formData));

    // Clear the form data after submission
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
      testCenterRef: "",
    });

    setError("");
    setSuccessMessage("Registration successful! Your details are saved.");
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
              required
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <label htmlFor="rePassword">Re-Password</label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              placeholder="Enter your password again"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email id"
              required
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
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
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select your gender
              </option>
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
              required
            />
            <label htmlFor="testCenterRef">Test Center Ref</label>
            <input
              type="text"
              id="testCenterRef"
              name="testCenterRef"
              value={formData.testCenterRef}
              onChange={handleChange}
              placeholder="Enter your test center reference number"
            />
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
