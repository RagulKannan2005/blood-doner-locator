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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate unique ID for the donor
    const donorId = Date.now(); // Unique ID based on timestamp

    // Store the form data in local storage
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
            <div>
              <label htmlFor="male">Male
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                
              </label>
              <label htmlFor="female"> Female
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
               
              </label>
            </div>
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
