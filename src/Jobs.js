import React, { useState } from "react";
import "./Jobs.css";

function Jobs() {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [compensationVisible, setCompensationVisible] = useState(false);
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleJobSubmit = (e) => {
    e.preventDefault();

    // Create a job object with the captured information
    const job = {
      title: jobTitle,
      description: jobDescription,
      experience,
      location,
      compensationVisible,
      salary: {
        min: minSalary,
        max: maxSalary,
      },
    };

    // Perform the necessary actions with the job data, such as saving it to a database or displaying it on the UI
    console.log(job);

    // Clear the form fields
    setJobTitle("");
    setJobDescription("");
    setExperience("");
    setLocation("");
    setCompensationVisible(false);
    setMinSalary("");
    setMaxSalary("");

    // Show the popup
    setShowPopup(true);
  };

  return (
    <div className="jobs-container">
      <h2>Jobs</h2>
      <form onSubmit={handleJobSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description:</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience (years):</label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="compensation">Compensation (LPA):</label>
          <div className="salary-range">
            <input
              type="number"
              id="minSalary"
              placeholder="Min Salary"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
              required
            />
            <span className="range-separator">-</span>
            <input
              type="number"
              id="maxSalary"
              placeholder="Max Salary"
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={compensationVisible}
              onChange={(e) => setCompensationVisible(e.target.checked)}
            />{" "}
            Reveal Compensation to Candidates
          </label>
        </div>
        <button type="submit">Post Job</button>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="login-section">
              <h3>Existing User Login</h3>
              <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <button className="google-login">Login with Google</button>
              </form>
            </div>
            <div className="signup-section">
              <h3>New User Signup</h3>
              <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Work Email" />
                <button>Signup</button>
                <button className="google-login">Login with Google</button>
              </form>
            </div>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
