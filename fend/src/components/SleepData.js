import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
// const axios = require("axios");

export default function SleepData() {
  const [data, setData] = useState([]);

  // call the API to retrieve sleep data
  // get the response json, and set data state to json data
  const getAllSleepData = () => {
    fetch("http://localhost:5000/api/sleepdata")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  // upon page load, retrieve sleep data
  useEffect(() => {
    console.log("Retrieving Sleep Data");
    getAllSleepData();
  });

  return (
    <div>
      <h1>Sleep Data</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Epoch</th>
            <th>Acceleration X</th>
            <th>Acceleration Y</th>
            <th>Acceleration Z</th>
            <th>Activity Count</th>
            <th>Heart Rate</th>
            <th>REM Stage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.patientId}</td>
              <td>{item.epoch}</td>
              <td>{item.acceleration_x}</td>
              <td>{item.acceleration_y}</td>
              <td>{item.acceleration_z}</td>
              <td>{item.activity_count}</td>
              <td>{item.heart_rate}</td>
              <td>{item.rem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
