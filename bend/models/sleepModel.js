const mongoose = require("mongoose");

const sleepSchema = mongoose.Schema(
  {
    patientId: {
      type: String,
      required: [true, "Patient's ID is required"],
    },
    epoch: {
      type: Number,
    },
    epochString: {
      type: String,
    },
    acceleration_x: {
      type: Number,
    },
    acceleration_y: {
      type: Number,
    },
    acceleration_z: {
      type: Number,
    },
    activity_count: {
      type: Number,
    },
    heart_rate: {
      type: Number,
    },
    rem: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SleepModel", sleepSchema, "sleepdata");
