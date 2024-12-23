import "./Register.css";

const Registerform = () => {
  return (
    <div>
      <div className="form-container">
        <h1>Register Form</h1>
        <form action="#">
          <div className="input-container">
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" />
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" />
            <label htmlFor="Re-Password">Re-Password</label>
            <input type="password" id="Re-Password" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" />
            <label htmlFor="blood-group">Select Your Blood Group</label>
            <select id="blood-group" name="blood-group" defaultValue="" required>
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
            <label htmlFor="Gender">Gender</label>
            <input type="radio" name="Gender" id="" />Male
            <input type="radio" name="Gender" id="" />Female
            <label htmlFor="Dateofbirth">Date Of Birth</label>
            <input type="date" id="Dateofbirth" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
