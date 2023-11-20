const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    userName: String,
    comment: String,
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;
