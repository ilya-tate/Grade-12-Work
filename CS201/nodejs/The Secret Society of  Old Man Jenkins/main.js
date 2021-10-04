const http = require("http");

const hintButton = (hint) => {
  return `<button onclick="alert('${hint}')">Hint</button>`;
};

const urlsWhiteHex = ["/fff", "/ffff", "/ffffff", "/ffffffff"];
const urlsStringOne = ["/1", "/one"];

http
  .createServer()
  .on("request", (req, res) => {
    if (urlsWhiteHex.includes(req.url)) req.url = "/fff";
    if (urlsStringOne.includes(req.url)) req.url = "/1";

    switch (req.url) {
      case "/":
        res.end(
          "<pre>Welcome to the first test to enter the super secret society of secrets that are super." +
            `\nTo begin, what kind of secrets are in this society?</pre>` +
            hintButton(`It\\'s like the \\'_____ hero\\'`)
        );
        break;

      case "/super":
        res.end(
          "<pre>white</pre>" +
            hintButton(`A witch is going to case a \\'hex\\' on you`)
        );
        break;

      case "/fff":
        res.end(
          "<pre>0001</pre>" +
            hintButton(`Linux stores \\'binaries\\' in the /bin directory`)
        );
        break;

      case "/1":
        res.end(
          `<pre id=\"intuition\">The answer to this one is in the source</pre>` +
            hintButton(`Let\\'s see if you pass the \\'inspection\\'`)
        );
        break;

      case "/intuition":
        res.end("<pre>A burnt wood chooses to have them all</pre>");
        break;

      case "/ash":
        res.end("<pre>Test</pre>");
        break;

      default:
        res.end("<pre>Wrong Answer!</pre>");
        break;
    }
  })
  .listen(3000);
