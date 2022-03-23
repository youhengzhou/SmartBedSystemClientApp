// so basically, all the resources in my api will have its own
// routes in the routes goalRoutes folder.

const express = require("express"); // common js syntax
const router = express.Router();
const {
  getSleep,
  setSleep,
  updateSleep,
  deleteSleep,
} = require("../controllers/sleepModelController");

router.route("/").get(getSleep).post(setSleep);
router.route("/:id").put(updateSleep).delete(deleteSleep);

// // Http website will get resources with a get command
// router.get("/", getGoals);

// // Post, create a goal
// router.post("/", setGoal);

// // Put, update a goal
// router.put("/:id", updateGoal);

// // Delete, delete a goal
// router.delete("/:id", deleteGoal);

module.exports = router;
