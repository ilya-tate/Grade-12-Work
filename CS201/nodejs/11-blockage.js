const http = require("http");
const { read } = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Home");
      break;

    case "/about":
      setTimeout(() => {
        for (let i = 0; i < 1000; i++) {
          for (let j = 0; j < 1000; j++) {
            console.log(i, j);
          }
        }
      }, 0);
      res.end("About");

    default:
      res.end("404");
      break;
  }
});

server.listen(5000, () => console.log("Server is listening on port 5000"));
