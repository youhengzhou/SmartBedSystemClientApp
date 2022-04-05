import { useState, useEffect } from "react";
import DateTime from "./DateTime";
const axios = require("axios");

export default function AlarmData() {
  const [data, setData] = useState([]);
  const [alarm, setAlarm] = useState("");
  const [value, setValue] = useState(new Date());

  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.put("http://localhost:5000/api/alarm/623cc9c9b18ccbbaae149734", {
      epoch: alarm,
    });
  };

  const getAllAlarmData = () => {
    fetch("http://localhost:5000/api/alarm")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    console.log("Retrieving Alarm Data");
    getAllAlarmData();
  });

  return (
    <div>
      <h1>Alarm Data</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Epoch</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.patientId}</td>
              <td>{item.epoch}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Input Alarm Data In Time</h1>

      <h1>Input Alarm Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Set Alarm:
          <input
            type="text"
            value={alarm}
            onChange={(e) => setAlarm(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
