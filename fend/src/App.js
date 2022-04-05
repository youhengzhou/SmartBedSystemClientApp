import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import SleepData from "./components/SleepData";
import AlarmData from "./components/AlarmData";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
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
