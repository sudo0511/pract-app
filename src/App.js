import React, { useEffect, useState } from "react";
import CompA from "./CompA";

const App = () => {
  const [jobIds, setJobIDs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loadNext, setLoadNext] = useState(0);
  const [loadNextFlag, setLoadNextFlag] = useState(false);

  const fetchJobDetails = async () => {
    if (jobIds.length != 0 && jobIds.length !== jobs.length) {
      let i,
        temp = [];
      for (i = loadNext; i < loadNext + 6; i++) {
        const requestDetails = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${jobIds[i + 1]}.json`
        );
        const response = await requestDetails.json();
        // console.log("i=", i, response);
        temp = [...temp, response];
      }
      console.log(temp);
      setJobs((prev) => [...prev, ...temp]);
      setLoadNextFlag((prev) => !prev);
      setLoadNext(i);
    }
  };

  const fetchJobIds = async () => {
    const requestIds = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );
    const response = await requestIds.json();
    setJobIDs([...response]);
  };

  useEffect(() => {
    fetchJobIds();
  }, []);

  useEffect(() => {
    console.log(loadNextFlag);
    !loadNextFlag && fetchJobDetails();
  }, [jobIds, loadNextFlag]);

  return (
    <div id="board-wrapper">
      <h2>Hacker News Job Board</h2>
      {jobs.length !== 0 &&
        jobs.map((ele) => <CompA jobsDetails={ele} key={ele.id} />)}
      {jobs.length !== 0 && loadNextFlag ? (
        <button id="load-btn" onClick={() => setLoadNextFlag((prev) => !prev)}>
          Load
        </button>
      ) : (
        <span>Loading..............</span>
      )}
    </div>
  );
};

export default App;
