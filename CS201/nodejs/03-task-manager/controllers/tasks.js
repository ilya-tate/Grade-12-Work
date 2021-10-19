const getTasks = (req, res) => {
  res.json({ method: req.method, task: "getTasks" });
};
const createTask = (req, res) => {
  res.json({ method: req.method, task: "createTask", body: req.body });
};
const removeTask = (req, res) => {
  res.json({ method: req.method, task: "removeTask", body: req.params });
};
const clearTasks = (req, res) => {
  res.json({ method: req.method, task: "clearTasks" });
};
const getTask = (req, res) => {
  res.json({ method: req.method, task: "getTask", id: req.params });
};
const editTask = (req, res) => {
  res.json({
    method: req.method,
    task: "editTask",
    id: req.params,
    body: req.body
  });
};

module.exports = {
  getTask,
  getTasks,
  removeTask,
  clearTasks,
  createTask,
  editTask
};
