const Task = require("../models/Task");

const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) return res.json({ msg: `No items with id ${id}` });
    res.json({ method: req.method, task, id: req.params });
  } catch (err) {
    res.json({ msg: `No items with id ${id}` });
  }
};
const getTasks = async (req, res) => {
  // .find is a query
  // Queries return the thing you are looking for
  const task = await Task.find({});
  // This is returned to the user as a json to be with the data
  res.json({ method: req.method, task: task });
};
const removeTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.deleteOne({ _id: id });
    if (!task) return res.json({ msg: `No task with id ${id}` });
    res.json({ method: req.method, task, id: req.params });
  } catch (err) {
    res.json({ msg: err });
  }
};
const clearTasks = (req, res) => {
  const task = await Task.deleteMany({});
  res.json({ method: req.method, task });
};
const createTask = async (req, res) => {
  // Task.create is a method that adds the template object to the database
  // .create is a method, not a query
  const task = await Task.create(req.body);
  // What the dev sees in the response
  res.json({ method: req.method, task: task, body: req.body });
};
const editTask = (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndUpdate(id, req.body, {
      // new: true => task will equal the new task
      new: true,
      // runValidators: true => Checks new task against model we created
      runValidators: true
    });
    if (!task) return res.json({ msg: `No tasks with id ${id}` });
    res.json({
      method: req.method,
      task,
      id: req.params,
      body: req.body
    });
  } catch (err) {
    res.json({ msg: err });
  }
};

module.exports = {
  getTask,
  getTasks,
  removeTask,
  clearTasks,
  createTask,
  editTask
};
