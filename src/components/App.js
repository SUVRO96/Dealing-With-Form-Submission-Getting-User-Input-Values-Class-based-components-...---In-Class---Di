import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
   let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const [tyme, update] = useState(time);

  const runningTime = () => {
    time = new Date().toLocaleTimeString();
    update(time);
  };
  setInterval(runningTime, 1000);

  useEffect(() => {
    clearInterval(runningTime);
  });

  return (
    <>
      <div className="main">
        <div className="date-time">{date + ", " + tyme}</div>
      </div>
    </>
  );
};

export default App;
