const asyncHandler = require("express-async-handler");

const AlarmModel = require("../models/alarmModel");

const getAlarm = asyncHandler(async (req, res) => {
  const records = await AlarmModel.find();

  res.status(200).json(records);
});

const setAlarm = asyncHandler(async (req, res) => {
  if (!req.body.patientId) {
    res.status(400);
    throw new Error("patientId is required");
  }

  const alarm = await AlarmModel.create({
    patientId: req.body.patientId,
    epoch: req.body.epoch,
    epochTest: req.body.epochTest,
  });

  res.status(200).json(alarm);
});

const updateAlarm = asyncHandler(async (req, res) => {
  const alarm = await AlarmModel.findById(req.params.id);

  if (!alarm) {
    res.status(404);
    throw new Error("Alarm not found");
  }

  const updatedAlarm = await AlarmModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedAlarm);
});

const deleteAlarm = asyncHandler(async (req, res) => {
  const alarm = await AlarmModel.findById(req.params.id);

  if (!alarm) {
    res.status(404);
    throw new Error("Alarm not found");
  }
  await alarm.remove();

  res.status(200).json({ id: req.params.id });
});

const sampleFetch = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Sample Fetch ${req.params.id}` });
});

module.exports = {
  getAlarm,
  setAlarm,
  updateAlarm,
  deleteAlarm,
};
