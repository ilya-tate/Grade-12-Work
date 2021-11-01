require("dotenv").config();
const connectDatabase = require("./db/connect");
const Product = require("./models/Product");
const jsonProducts = require("./products.json");

const populate = async () => {
  try {
    await connectDatabase(process.env.MONGO_URL);
    await Product.deleteMany({});
    await Product.create(jsonProducts);
    console.log("Populated");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
populate();
