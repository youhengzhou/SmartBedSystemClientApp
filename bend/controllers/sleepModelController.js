const asyncHandler = require("express-async-handler");

const SleepModel = require("../models/sleepModel");

const getSleep = asyncHandler(async (req, res) => {
  const records = await SleepModel.find();

  res.status(200).json(records);
});

const setSleep = asyncHandler(async (req, res) => {
  if (!req.body.patientId) {
    res.status(400);
    throw new Error("patientId is required");
  }

  const sleep = await SleepModel.create({
    patientId: req.body.patientId,
    epoch: req.body.epoch,
    epochString: req.body.epochString,
    acceleration_x: req.body.acceleration_x,
    acceleration_y: req.body.acceleration_y,
    acceleration_z: req.body.acceleration_z,
    activity_count: req.body.activity_count,
    heart_rate: req.body.heart_rate,
    rem: req.body.rem,
  });

  res.status(200).json(sleep);
});

const updateSleep = asyncHandler(async (req, res) => {
  const sleep = await SleepModel.findById(req.params.id);

  if (!sleep) {
    res.status(404);
    throw new Error("Sleep not found");
  }

  const updatedSleep = await SleepModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedSleep);
});

const deleteSleep = asyncHandler(async (req, res) => {
  const sleep = await SleepModel.findById(req.params.id);

  if (!sleep) {
    res.status(404);
    throw new Error("Sleep not found");
  }
  await sleep.remove();

  res.status(200).json({ id: req.params.id });
});

const sampleFetch = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Sample Fetch ${req.params.id}` });
});

module.exports = {
  getSleep,
  setSleep,
  updateSleep,
  deleteSleep,
};
