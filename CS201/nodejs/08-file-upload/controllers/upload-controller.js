const uploadProductImage = async (req, res) => {
  const productImage = req.files.image;
  res.send("Upload Product Image");
};

module.exports = {
  uploadProductImage
};
