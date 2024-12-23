import "./Register.css";

const Registerform = () => {
  return (
    <div>
      <div className="form-container">
        <h1>Register Form</h1>
        <form action="#">
          <div className="input-container">
            <label htmlFor="fname">Full Name</label>
            <input type="text" id="fname" placeholder="Enter your Fullname" />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" placeholder="Enter your last name" />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              placeholder="Enter your password"
            />
            <label htmlFor="Re-Password">Re-Password</label>
            <input
              type="password"
              id="Re-Password"
              placeholder="Enter your password again"
            />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email id" />
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              placeholder="Enter your phone number"
            />
            <label htmlFor="blood-group">Select Your Blood Group</label>
            <select
              id="blood-group"
              name="blood-group"
              defaultValue=""
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
            <label htmlFor="Gender">Gender</label>
            <input type="radio" name="Gender" id="male" /> Male
            <input type="radio" name="Gender" id="female" /> Female
            <label htmlFor="Dateofbirth">Date Of Birth</label>
            <input type="date" id="Dateofbirth" />
            <label htmlFor="qrcode">Attach your QR</label>
            <input type="file" id="qrcode" name="qrcode" accept="image/*" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
