const http = require("http");

http
  .createServer()
  .on("request", (req, res) => {
    if (req.url === "/") res.end("welcome");
    else res.end("404");
  })
  .listen(3000);
