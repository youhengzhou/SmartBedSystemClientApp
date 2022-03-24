import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import SleepData from "./components/SleepData";
import AlarmData from "./components/AlarmData";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
        <Routes>
          <Route exact path="/" element={<SleepData />} />
          <Route exact path="/alarm" element={<AlarmData />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
