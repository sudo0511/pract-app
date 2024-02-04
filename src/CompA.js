import React from 'react'

const CompA = ({jobsDetails}) => {
    console.log(jobsDetails);
  return (
    <div id='job-card'>{jobsDetails.title}</div>
  )
}

export default CompA