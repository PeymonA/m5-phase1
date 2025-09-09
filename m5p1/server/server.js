const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./routes/itemRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/m5-p1');

app.use(itemRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});

module.exports = app;