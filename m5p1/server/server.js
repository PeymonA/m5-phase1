const express = require("express");
const mongoose = require("mongoose");
const itemRouter = require("./routes/itemRoutes.js");
const fs = require('fs');

const app = express();

app.use(express.json());

fs.access('/.dockerenv', fs.constants.F_OK, (err) => {
  if (!err) {
      console.log('Running inside a Docker container (/.dockerenv exists)');
      mongoose.connect('mongodb://host.docker.internal:27017/m5-p1');
  } 
  else {
      console.log('Not running inside a Docker container (/.dockerenv not found)');
      mongoose.connect('mongodb://localhost:27017/m5-p1');
  }
});

app.use(itemRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});

module.exports = app;