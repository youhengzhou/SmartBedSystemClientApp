import { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
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
      <div>
        <Line
          data={{
            labels: [
              "22:00",
              "23:00",
              "00:00",
              "01:00",
              "02:00",
              "03:00",
              "04:00",
              "05:00",
              "06:00",
            ],
            datasets: [
              {
                label: "REM Detection",
                data: [1, 2, 3, 4, 2, 4, 3, 2, 1],
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxis: {
                suggestedMin: 0,
                suggestedMax: 5,
              },
            },
          }}
        />
      </div>
      <div>
        <Line
          data={{
            labels: [
              "22:00",
              "23:00",
              "00:00",
              "01:00",
              "02:00",
              "03:00",
              "04:00",
              "05:00",
              "06:00",
            ],
            datasets: [
              {
                label: "Heart Rate",
                data: [75, 73, 60, 62, 60, 68, 72, 75, 79],
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxis: {
                suggestedMin: 50,
                suggestedMax: 90,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
