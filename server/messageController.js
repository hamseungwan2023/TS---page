const messageModel = require("./messageModel");

//createMessage

const createMessage = async (req, res) => {
  console.log(1);

  try {
    const { userName, comment } = req.body;
    console.log(2);

    const message = new messageModel({
      userName,
      comment,
    });
    console.log(3);

    const response = await message.save();
    console.log(4);

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
//getMessage
const getMessage = async (req, res) => {
  console.log(5);

  try {
    console.log(6);
    const { comment } = req.params;
    // const message = await messageModel.find({ comment });
    const message = await messageModel.find();
    console.log(7);

    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { createMessage, getMessage };
