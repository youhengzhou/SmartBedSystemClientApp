const mongoose = require("mongoose");

const sleepSchema = mongoose.Schema(
  {
    patientId: {
      type: String,
      required: [true, "Text is required"],
    },
    epoch: {
      type: String,
    },
    acceleration_x: {
      type: Int32Array,
    },
    acceleration_y: {
      type: Int32Array,
    },
    acceleration_z: {
      type: Int32Array,
    },
    heart_rate: {
      type: Int32Array,
    },
    activity_count: {
      type: Int32Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SleepModel", sleepSchema, "sleepdata");
