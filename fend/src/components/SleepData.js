import { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// const axios = require("axios");

export default function SleepData() {
  const [data, setData] = useState([]);
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);

  var xxxepoch = [];
  var xxxacceleration_x = [];
  var xxxacceleration_y = [];
  var xxxacceleration_z = [];
  var xxxactivity_count = [];
  var xxxheart_rate = [];
  var xxxrem = [];

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
    xxxepoch = data.map((item) => item.epoch);
    console.log(xxxepoch);
    xxxacceleration_x = data.map((item) => item.acceleration_x);
    xxxacceleration_y = data.map((item) => item.acceleration_y);
    xxxacceleration_z = data.map((item) => item.acceleration_z);
    xxxactivity_count = data.map((item) => item.activity_count);
    xxxheart_rate = data.map((item) => item.heart_rate);
    console.log(xxxheart_rate);
    xxxrem = data.map((item) => item.rem);
    setXData(xxxepoch);
    setYData(xxxheart_rate);
    // console.log(yData);
  };

  // upon page load, retrieve sleep data
  useEffect(() => {
    //console.log("Retrieving Sleep Data");
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
      {"this is something"}
      <div>
        <Line
          data={{
            labels: xData,
            datasets: [
              {
                label: "REM Detection",
                data: yData,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                color: "rgba(255, 99, 132, 1)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
