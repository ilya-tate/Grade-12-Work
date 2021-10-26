const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide a name"],
    trim: true,
    maxlength: [20, "Name cannot be longer than 20 char"]
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);
