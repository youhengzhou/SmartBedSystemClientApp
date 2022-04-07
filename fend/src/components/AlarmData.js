import { useState, useEffect } from "react";
import DateTime from "./DateTime";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
const axios = require("axios");

export default function AlarmData() {
  const [data, setData] = useState([]);
  const [alarm, setAlarm] = useState("");
  const [dateValue, setDateValue] = useState(new Date());

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.put("http://localhost:5000/api/alarm/624e83daaa4e17ae7a3ad05c", {
      epoch: alarm,
    });
  };

  const sendAlarm = () => {
    console.log("sending user GUI picked alarm data");
    axios.put("http://localhost:5000/api/alarm/624e83daaa4e17ae7a3ad05c", {
      epochTest: dateValue.toString(),
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
              <td>{item.epochTest}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h1>Input Alarm Data In Time</h1>
        <div style={{ position: "relative", bottom: "2px" }}>
          <p>Selected Alarm Time: {dateValue.toString()}</p>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
            />
          </LocalizationProvider>
        </div>
        <div style={{ position: "relative", top: "10px" }}>
          <button onClick={sendAlarm}>Set Alarm Time</button>
        </div>
      </div>
      {/* <h1>Input Alarm Data (Legacy)</h1>
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
      </form> */}
    </div>
  );
}
