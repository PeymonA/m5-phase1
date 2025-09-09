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

app.get("/item/:id", async (request, response) => {
  try {
    const item = await itemModel.findById( request.params.id );
    if (!item) response.status(404).send("No item found");
    response.status(200).send(item);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/item", async (request, response) => {
  const item = new itemModel(request.body);

  try {
    await item.save();
    response.send(item);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/item/:id", async (request, response) => {
  try {
    const updatedItem = await itemModel.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true } // return the updated document
    );
    if (!updatedItem) {
      return response.status(404).send({ error: "Item not found" });
    }
    response.send(updatedItem);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

app.delete("/item/:id", async (request, response) => {
  try {
    const item = await itemModel.findByIdAndDelete(request.params.id);

    if (!item) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;