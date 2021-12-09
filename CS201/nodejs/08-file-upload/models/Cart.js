const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  item: [
    {
      name: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports(mongoose.model("Product"), schema);
