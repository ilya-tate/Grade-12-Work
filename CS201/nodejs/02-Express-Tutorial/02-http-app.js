const http = require("http");
const fs = require("fs");

// Import all of the files
const [homePage, homeStyles, homeImage, homeLogic] = [
  fs.readFileSync("./navbar-app/index.html"),
  fs.readFileSync("./navbar-app/styles.css"),
  fs.readFileSync("./navbar-app/logo.svg"),
  fs.readFileSync("./navbar-app/browser-app.js")
];

const loadContent = (res, code, fileType, content) => {
  return (
    res.writeHead(code, { "content-type": `${fileType}` }), res.write(content)
  );
};

http
  .createServer()
  .on("request", (req, res) => {
    const url = req.url;
    console.log(url);

    // Home page
    switch (url) {
      case "/":
        loadContent(res, 200, "text/html", homePage);
        break;

      case "/styles.css":
        loadContent(res, 200, "text/css", homeStyles);
        break;

      case "/logo.svg":
        loadContent(res, 200, "image/svg+xml", homeImage);
        break;

      case "/browser-app.js":
        loadContent(res, 200, "text/javascript", homeLogic);
        break;

      default:
        loadContent(res, 404, "text/html", "<pre>File not found</pre>");
    }
    res.end();
  })
  .listen(3000, () => console.log("Listening on port 3000"));
