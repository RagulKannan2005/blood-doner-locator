import React, { useState, useEffect } from "react";
import "../components/cssfiles/seeker-registeration.css";

const SeekerRegisteration = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    urgency: "",
    reason: "",
    hospital: "",
    location: "",
    date: "",
  });

  // List of hospitals
  const hospitals = [
    { name: "Apollo Specialty Hospital", location: "KK Nagar" },
    { name: "Meenakshi Mission Hospital", location: "Lake Area" },
    { name: "Velammal Medical College Hospital", location: "Anuppanadi" },
    { name: "Aravind Eye Hospital", location: "Anna Nagar" },
    { name: "Madurai Rajaji Government Hospital", location: "Panagal Road" },
    { name: "Grace Kennett Foundation Hospital", location: "Simmakkal" },
    { name: "Sundaram Arulrhaj Hospital", location: "Anna Nagar East" },
    { name: "Devadoss Multi Speciality Hospital", location: "Narayanapuram" },
    { name: "Vadamalayan Hospital", location: "Tallakulam" },
    { name: "Guru Hospital", location: "SS Colony" },
  ];

  // Load data from localStorage if available
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("seekerFormData"));
    if (storedData) {
      setFormData(storedData); // Set the form data if available in localStorage
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the hospital changes, also update the location
    if (name === "hospital") {
      const selectedHospital = hospitals.find(
        (hospital) => hospital.name === value
      );
      const updatedData = {
        ...formData,
        hospital: value,
        location: selectedHospital ? selectedHospital.location : "",
      };
      setFormData(updatedData);
      localStorage.setItem("seekerFormData", JSON.stringify(updatedData)); // Save to localStorage
    } else {
      const updatedData = { ...formData, [name]: value };
      setFormData(updatedData);
      localStorage.setItem("seekerFormData", JSON.stringify(updatedData)); // Save to localStorage
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = formData.phone.trim();
    if (!/^[1-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!Object.values(formData).every(value => value)) {
      alert("Please fill in all required fields.");
      return;
    }

    // If location access is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const geoData = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          const seekerRequest = {
            id: Date.now(),
            geoLocation: geoData,
            ...formData
          };

          console.log("Saving seekerRequest with geolocation:", seekerRequest);

          try {
            const existingRequests = JSON.parse(localStorage.getItem("seekerRequests") || "[]");
            console.log("Existing requests in localStorage:", existingRequests);
            localStorage.setItem("seekerRequests", JSON.stringify([...existingRequests, seekerRequest]));

            setFormData({
              name: "", phone: "", bloodGroup: "", urgency: "",
              reason: "", hospital: "", location: "", date: ""
            });

            // Clear stored form data after successful submission
            localStorage.removeItem("seekerFormData");

            alert("Blood request submitted successfully!");
          } catch (error) {
            console.error("Error saving request to localStorage:", error);
            alert("Error saving request. Please try again.");
          }
        },
        () => {
          alert("Location access denied. Proceeding without location data.");
          saveWithoutLocation();
        }
      );
    } else {
      saveWithoutLocation();
    }
  };

  const saveWithoutLocation = () => {
    const seekerRequest = {
      id: Date.now(),
      ...formData
    };

    console.log("Saving seekerRequest without geolocation:", seekerRequest);

    try {
      const existingRequests = JSON.parse(localStorage.getItem("seekerRequests") || "[]");
      console.log("Existing requests in localStorage:", existingRequests);
      localStorage.setItem("seekerRequests", JSON.stringify([...existingRequests, seekerRequest]));

      setFormData({
        name: "", phone: "", bloodGroup: "", urgency: "",
        reason: "", hospital: "", location: "", date: ""
      });

      // Clear stored form data after successful submission
      localStorage.removeItem("seekerFormData");

      alert("Blood request submitted successfully!");
    } catch (error) {
      console.error("Error saving request to localStorage:", error);
      alert("Error saving request. Please try again.");
    }
  };

  return (
    <div className="seeker-main-div">
      <form className="seeker-form-container" onSubmit={handleSubmit}>
        <h2>Blood Request Form</h2>

        <label htmlFor="name">Patient Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="bloodGroup">Blood Group Needed</label>
        <select
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>

        <label htmlFor="urgency">Urgency</label>
        <select
          id="urgency"
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          required
        >
          <option value="">Select Urgency</option>
          <option value="High">High (within 24 hours)</option>
          <option value="Medium">Medium (within 3 days)</option>
          <option value="Low">Low (within a week)</option>
        </select>

        <label htmlFor="reason">Reason for Request</label>
        <textarea
          id="reason"
          name="reason"
          rows="4"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Explain the reason for the blood request"
          required
        ></textarea>

        <label htmlFor="hospital">Hospital/Donation Center</label>
        <select
          id="hospital"
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          required
        >
          <option value="">Select Hospital/Donation Center</option>
          {hospitals.map((hospital) => (
            <option key={hospital.name} value={hospital.name}>
              {hospital.name} ({hospital.location})
            </option>
          ))}
        </select>

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          readOnly
          placeholder="Location will be set automatically"
        />

        <label htmlFor="date">Date Blood is Needed</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit" className="seeker-submit-button">
          Submit Blood Request
        </button>
      </form>
    </div>
  );
};

export default SeekerRegisteration;
