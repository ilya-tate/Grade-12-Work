const getAllProducts = (req, res) => {
  res.json({ status: 200, message: "Success", results: [] });
};

const getAllProductsStatic = (req, res) => {
  res.json({ status: 200, message: "Static", results: [] });
};

module.exports = { getAllProducts, getAllProductsStatic };
