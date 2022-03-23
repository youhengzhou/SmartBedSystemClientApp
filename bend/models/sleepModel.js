const mongoose = require("mongoose");

const sleepSchema = mongoose.Schema(
  {
    patientId: {
      type: String,
      required: [true, "Text is required"],
    },
    epoch: {
      type: Number,
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
    heart_rate: {
      type: Number,
    },
    activity_count: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SleepModel", sleepSchema, "sleepdata");
