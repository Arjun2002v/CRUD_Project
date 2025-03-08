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

app.get("/api/product", async (req, res) => {
  try {
    const pro = await Product.find({});
    res.status(200).json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Use 500 for general server errors
  }
});

app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send(202).json(product);
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
