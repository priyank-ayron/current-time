import React, { useState } from "react";
import "./App.css";
import "./index.css";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setctime] = useState(newTime);

  const updateTime = () => {
    let newCtime = new Date().toLocaleTimeString();
    setctime(newCtime);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <div className="heading">
        <h1>{ctime}</h1>
      </div>
    </>
  );
};
export default App;
