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

  return (
    <>
      <div className="heading">
        <h1>{ctime}</h1>
        <button onClick={updateTime}>Click me</button>
      </div>
    </>
  );
};
export default App;
