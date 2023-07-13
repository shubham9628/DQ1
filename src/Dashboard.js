import React, { useState } from "react";
import Jobs from "./Jobs";

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  const handleJobPost = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Job cards */}
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <div>
          <h3>Job History</h3>
          <div className="job-cards">
            {jobs.map((job, index) => (
              <div className="job-card" key={index}>
                <h4>{job.title}</h4>
                <p>Status: {job.status}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Render Jobs component and pass the handleJobPost function as prop */}
      <Jobs onJobPost={handleJobPost} />
    </div>
  );
}

export default Dashboard;
