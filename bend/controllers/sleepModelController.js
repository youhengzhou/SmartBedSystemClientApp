const asyncHandler = require("express-async-handler");

const SleepModel = require("../models/sleepModel");

const getSleep = asyncHandler(async (req, res) => {
  const records = await Goal.find();

  res.status(200).json(records);
});

const setSleep = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Text is required");
  }

  const sleep = await SleepModel.create({
    text: req.body.text,
    text2: req.body.text2,
  });

  res.status(200).json(sleep);
});

const updateSleep = asyncHandler(async (req, res) => {
  const sleep = await SleepModel.findById(req.params.id);

  if (!sleep) {
    res.status(404);
    throw new Error("Goal not found");
  }

  const updatedGoal = await SleepModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedGoal);
});

const deleteSleep = asyncHandler(async (req, res) => {
  const sleep = await SleepModel.findById(req.params.id);

  if (!sleep) {
    res.status(404);
    throw new Error("Goal not found");
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
