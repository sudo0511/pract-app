import React from "react";

const CompA = ({ jobsDetails }) => {
  console.log(jobsDetails);
  return (
    <div id="job-card">
      {jobsDetails.url ? (
        <a className="job-header" href={jobsDetails.url} target="_blank">
          {jobsDetails.title}
        </a>
      ) : (
        <div className="job-header">{jobsDetails.title}</div>
      )}
      <div id="job-by">
        By {jobsDetails.by},{" "}
        <span id="timestamp">{new Date(jobsDetails.time).toTimeString()}</span>
      </div>
    </div>
  );
};

export default CompA;
