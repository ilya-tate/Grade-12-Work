// Login function, returns json with success
const login = (req, res) => {
  res.json({ status: 200, msg: "Success", results: [] });
};

// Dashboard function, returns json with success
const dashboard = (req, res) => {
  res.json({ status: 200, msg: "Success", results: [] });
};

module.exports = { login, dashboard };
