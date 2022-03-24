const mongoose = require("mongoose");

const alarmModel = mongoose.Schema({
  patientId: {
    type: String,
    required: [true, "Patient's ID is required"],
  },
  epoch: {
    type: Number,
  },
});

module.exports = mongoose.model("alarmModel", alarmModel, "alarmdata");
