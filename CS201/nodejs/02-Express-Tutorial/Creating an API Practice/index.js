const express = require("express");
const { menu } = require("./data");

const app = express();
const port = 3000;

app
  .get("/api/v1", (req, res) => {
    let newMenu = {};
    menu.map((item) => {
      const { title, category } = item;
      if (!newMenu[category]) newMenu[category] = [];
      newMenu[category].push(title);
    });

    res.json(newMenu);
  })
  .get("/api/v1/find/id/:id", (req, res) => {
    const { id } = req.params;
    const foundItem = menu.find((item) => {
      return item.id === +id;
    });

    if (!foundItem) {
      res.status(404).json({ result: null, error: "Not found" });
    }
    res.json({ result: foundItem, message: "Found" });
  })
  .get("/api/v1/find/category/:category", (req, res) => {
    const { category } = req.params;
    const foundItems = menu.filter((item) => {
      return item.category === category;
    });

    if (!foundItems.length) {
      res.status(404).json({ result: null, error: "Not found" });
    }
    res.json({ result: foundItems, message: "Found" });
  })
  .get("/api/v1/sort/price/query", (req, res) => {
    const { dir } = req.query;

    let sortedItems = [...menu];
    if (["asc", "ascending"].includes(dir)) {
      sortedItems.sort((a, b) => a.price - b.price);
    }
    if (["dec", "descending"].includes(dir)) {
      sortedItems.sort((a, b) => b.price - a.price);
    }
    res.json(sortedItems);
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
