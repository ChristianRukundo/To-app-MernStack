const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,

      
    },
    isFinished : {
      type: Boolean,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", itemSchema);
