const express = require("express");

const router = express.Router();

const {
  createProduct,
  getAllProducts
} = require("../controllers/product-controller");
const { uploadProductImage } = require("../controllers/upload-controller");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/upload").post(uploadProductImage);

module.exports = router;
