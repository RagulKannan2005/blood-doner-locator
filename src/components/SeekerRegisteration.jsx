import "../components/cssfiles/seeker-registeration.css"
const SeekerRegisteration = () => {
  return (
    <>
      <div className="seeker-main-div">
        <form className="seeker-form-container">
          <h2>Blood Request Form</h2>

          <label htmlFor="name">Patient Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />

          

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="bloodGroup">Blood Group Needed</label>
          <select id="bloodGroup" name="bloodGroup" required>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <label htmlFor="urgency">Urgency</label>
          <select id="urgency" name="urgency" required>
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
            placeholder="Explain the reason for the blood request"
            required
          ></textarea>

          <label htmlFor="hospital">Hospital/Donation Center</label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            placeholder="Enter hospital or donation center name"
            required
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter the city or area where blood is needed"
            required
          />

          <label htmlFor="date">Date Blood is Needed</label>
          <input type="date" id="date" name="date" required />

          <button type="submit" className="seeker-submit-button">Submit Blood Request</button>
        </form>
      </div>
    </>
  );
};

export default SeekerRegisteration;
