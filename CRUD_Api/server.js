const express = require("express");

const app = express();
const mongoose = require("mongoose");
const Product = require("./model/product.model");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("F u 3000");
});

app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send(200).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
  res.sendStatus(202);
  res.send(req.body);
});
mongoose
  .connect(
    "mongodb+srv://arjupallufd:1vF2s9Znq8I5qG0y@backenddev.mc217.mongodb.net/BackendDev?retryWrites=true&w=majority&appName=BackendDev"
  )
  .then(() => {
    console.log("Connected to DB");
  });
