const express = require("express");
const itemModel = require("../models/item");
const app = express();

app.get("/items", async (request, response) => {
  const items = await itemModel.find({});

  try {
    response.send(items);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;