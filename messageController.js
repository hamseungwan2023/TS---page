const messageModel = require("./messageModel");

//createMessage

const createMessage = async (req, res) => {
  const { userName, comment } = req.body;

  const message = new messageModel({
    userName,
    comment,
  });
  try {
    const response = await message.save();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
//getMessage
const getMessage = async (req, res) => {
  const { comment } = req.params;
  try {
    // const message = await messageModel.find({ comment });
    const message = await messageModel.find();
    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { createMessage, getMessage };
