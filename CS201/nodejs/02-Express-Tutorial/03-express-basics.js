const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("home page");
  res.status(200).send("Home Page");
});

app.listen(port, () => console.log(`App is listening at port ${port}`));

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});
