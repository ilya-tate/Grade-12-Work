const express = require("express");
const app = express();
const port = 3000;

const { products } = require("./data");

app
  .get("/", (req, res) => {
    res.send(`<h1>Home Page</h1><a href="/api/products">products</a>`);
  })
  .get("/api/products", (req, res) => {
    const newJson = res.send(
      products.map((product) => {
        const { name, id, image } = product;
        return { name, id, image };
      })
    );
    res.json(newJson);
  })
  .get("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const singleProduct = products.find((product) => {
      return product.id === +id;
    });
    if (!singleProduct) {
      res.json({ results: [], error: "Product not found" });
    }

    res.json({ results: [singleProduct], message: "Product found" });
  })
  .get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query;
    // ... creates a new nonmutable copy
    let sortedProducts = [...products];
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.includes(search);
      });
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, +limit);
    }
    if (sortedProducts.length < 1) {
      return res.json({ result: [], message: "Product not found" });
    }

    res.json({ results: sortedProducts, message: "Products found" });
  })
  .all("*", (req, res) => {
    res.status(404).send("Page not found");
  })
  .listen(port, () => console.log(`Server listening on port ${port}`));
