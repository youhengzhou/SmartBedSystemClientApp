import { useState, useEffect } from "react";
// const axios = require("axios");

export default function SleepData() {
  const [data, setData] = useState([]);

  //   const getGoals = async (token) => {
  //     const response = await axios.get("/api/sleepdata");
  //     return response.data;
  //   };

  //   axios
  //     .get("/api/sleepdata")
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/sleepdata")
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((err) => console.log(err));
  // }, []);

  //   const getAllSleepData = () => {
  //     axios
  //       .get(`http://localhost:5000/api/sleepdata`, { withCredentials: true })
  //       .then((response) => {
  //         data(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(" error", error);
  //       });
  //   };

  const getAllSleepData = () => {
    fetch("http://localhost:5000/api/sleepdata")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

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
