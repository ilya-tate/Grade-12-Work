const Product = require("../models/Product");
const getAllProducts = async (req, res) => {
  const { featured, company, name, filters, sort, field } = req.query;
  let queryObject = {};
  if (featured) queryObject.featured = featured === "true";
  if (company) queryObject.company = company;
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (filters) {
    const options = ["price", "rating"];
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<=": "$lte",
      "<": "$lt"
    };
    const re = /\b(<|>|<=|>=|=)\b/g;
    // filters = price >= 30, rating > 3
    let newFilters = filters.replace(re, (match) => `-${operatorMap[match]}-`);
    // filters = price-$gte-30, rating-$gt-3
    newFilters = newFilters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      // field = price
      // operator = $gte
      // value = 30
      if (options.includes(field)) {
        queryObject[field] = { [operator]: +value };
      }
    });

    // { price: { $gte: 30; } }

    queryObject += newFilters;
  }
  let results = await Product.find(queryObject);

  if (sort) {
    const sortList = sort.replace(",", " ");
    results = results.sort(sortList);
  } else {
    results = results.sort("createdAt");
  }

  if (fields) {
    const fieldsList = fields.replace(",", " ");
    results = results.select(fields);
  }
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 5;
  const skip = (page - 1) * limit;

  results = results.skip(skip).limit(limit);

  const products = await results;
  res.json({
    status: 200,
    message: "Success",
    results: products,
    nbHits: products.length
  });
};

const getAllProductsStatic = async (req, res) => {
  const products = await results;
  res.json({ status: 200, message: "Static", results: products });
};

module.exports = { getAllProducts, getAllProductsStatic };
