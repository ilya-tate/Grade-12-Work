const Product = require("../models/Product");
const getAllProducts = async (req, res) => {
  const { featured, company, name, numericFilters } = req.query;
  let queryObject = {};
  if (featured) queryObject.featured = featured === "true";
  if (company) queryObject.company = company;
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    const options = ["price", "rating"];
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<=": "$lte",
      "<": "$lt"
    };
    const re = /\b(<|>|<=|>=|=)\b/g;
    let filters = numericFilters.replace(
      re,
      (match) => `-${operatorMap[match]}-`
    );
  }

  let results = await Product.find(queryObject);
  res.json({ status: 200, message: "Success", results });
};

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).select("-name -price");
  res.json({ status: 200, message: "Static", results: products });
};

module.exports = { getAllProducts, getAllProductsStatic };
