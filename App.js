const express = require("express");
const mongoose = require("mongoose");
const messageRouter = require("./messageRoute");
const cors = require("cors");
const corsOption = {
  origin: ["http://ec2-54-226-163-236.compute-1.amazonaws.com:5000/"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors(corsOption));

app.use("/api", messageRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.set("port", process.env.PORT || 5000);
const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connection established"))
  .catch((error) => console.log("MongoDB connection failed:", error.message));

app.listen(port, (req, res) => {
  console.log(`Server running on port: ${port}`);
});
