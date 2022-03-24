import { useState, useEffect } from "react";

export default function SleepData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/sleepdata")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

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
            <th>Heart Rate</th>
            <th>Activity Count</th>
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
              <td>{item.heart_rate}</td>
              <td>{item.activity_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
