const mongoose = require("mongoose");

const sleepSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Text is required"],
    },
    text2: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SleepModel", sleepSchema, "sleepdata");
