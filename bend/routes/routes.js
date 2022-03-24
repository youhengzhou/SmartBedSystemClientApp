// all the resources in for the server's api will have its own
// routes in the routes folder.

const express = require("express");
const router = express.Router();
const {
  getSleep,
  setSleep,
  updateSleep,
  deleteSleep,
} = require("../controllers/sleepModelController");

const {
  getAlarm,
  setAlarm,
  updateAlarm,
  deleteAlarm,
} = require("../controllers/alarmModelController");

// Alternative way of creating routes
// router.route("/").get(getSleep).post(setSleep);
// router.route("/:id").put(updateSleep).delete(deleteSleep);

// Get, will get sleep data with a get command
router.get("/", getSleep);

// Post, create a sleep data entry
router.post("/", setSleep);

// Put, update a user's sleep data entry using id
router.put("/:id", updateSleep);

// Delete, delete a sleep data entry
router.delete("/:id", deleteSleep);

// Get, will get alarm data with a get command
router.get("/alarm", getAlarm);

// Post, create a alarm data entry
router.post("/alarm", setAlarm);

// Put, update a user's alarm data entry using id
router.put("/alarm/:id", updateAlarm);

// Delete, delete an alarm data entry
router.delete("/alarm/:id", deleteAlarm);

module.exports = router;
