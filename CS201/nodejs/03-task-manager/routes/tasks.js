const express = require("express");
const router = express.Router();

const {
  getTask,
  getTasks,
  removeTask,
  clearTasks,
  createTask,
  editTask
} = require("../controllers/tasks");

router.route("/").get(getTasks).delete(clearTasks).post(createTask);
router.route("/:id").get(getTask).delete(removeTask).put(editTask);

module.exports = router;
