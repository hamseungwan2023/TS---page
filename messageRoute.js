const express = require("express");
const { createMessage, getMessage } = require("./messageController");

const router = express.Router();

router.post("/", createMessage);
router.get("/:comment", getMessage);

module.exports = router;
