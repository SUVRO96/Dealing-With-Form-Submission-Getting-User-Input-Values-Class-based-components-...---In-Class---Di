import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const [tym, update] = useState(time);

  const runningTime = () => {
    time = new Date().toLocaleTimeString();
    update(time);
  };
  setInterval(runningTime, 1000);

  useEffect(() => {
    clearInterval(runningTime);
  });

  return (
    <div id="main">
      <div className="date-time">{date + " , " + tym}</div>
    </div>
  );
};

export default App;
