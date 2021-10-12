// Logger middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toDateString();
  console.log(method, url, time);
};

module.exports = logger;
