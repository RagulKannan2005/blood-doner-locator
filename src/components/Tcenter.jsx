import React from 'react'
import './cssfiles/tcenter.css'


const Tcenter = () => {
    return (
        <div className="tcenter">
          <div className="form-container">
            <h2 style={{ color: "white" }}>Testing Center Registration Form</h2>
            <form className="form-group">
              <div className="Regulatory-Requirements">
                <label htmlFor="test-center">Name of your blood test center </label>
                <input type="text" />
                <label htmlFor="business-reg">Business Registration</label>
                <select id="business-reg">
                  <option></option>
                  <option value="sole-proprietorship">Sole Proprietorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="private-limited-company">
                    Private Limited Company
                  </option>
                </select>
    
                <label htmlFor="clinical-license">
                  Obtain a Clinical Establishment License
                </label>
                <select id="clinical-license">
                  <option></option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
    
                <label htmlFor="biomedical-waste">
                  Comply with Biomedical Waste Management Rules
                </label>
                <select id="biomedical-waste">
                  <option></option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
    
                <label htmlFor="staff-certifications">
                  Ensure Staff Have Required Certifications
                </label>
                <select id="staff-certifications">
                  <option></option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
    
                <label htmlFor="operational-license">
                  Apply for an Operational License
                </label>
                <select id="operational-license">
                  <option></option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
    
                <label htmlFor="fire-safety">
                  Adhere to Fire and Safety Regulations
                </label>
                <select id="fire-safety">
                  <option></option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
    
                <label htmlFor="insurance">
                  Obtain Insurance for the Testing Center
                </label>
                <select id="insurance">
                  <option></option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
    
                <label htmlFor="equipment-maintenance">
                  Regular Maintenance of Equipment
                </label>
                <select id="equipment-maintenance">
                  <option></option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
    
                <label htmlFor="emergency-plan">
                  Have an Emergency Response Plan in Place
                </label>
                <select id="emergency-plan">
                  <option></option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </div>
              <div className="submit-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Tcenter
