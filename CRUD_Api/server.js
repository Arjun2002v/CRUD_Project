const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./model/product.model");
const e = require("express");

// Middleware to parse JSON request bodies
app.use(express.json());

// Default route to check if the server is running
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("F u 3000");
});

// This route is redundant and will never be reached because the first '/' route takes precedence
app.get("/", (req, res) => {
  res.sendStatus(200);
});

// Get a product by ID from the database
app.get("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    // Respond with the found product (sendStatus(200) is redundant here)
    res.json(product);
  } catch (error) {
    // Send 404 if the product is not found or an error occurs
    res.sendStatus(404);
  }
});

// Get all products from the database
app.get("/api/product", async (req, res) => {
  try {
    const pro = await Product.find({});
    // Send the found products with a 200 OK status
    res.status(200).json(pro);
  } catch (error) {
    // Send a 500 Internal Server Error status if something goes wrong
    res.status(500).json({ error: error.message });
  }
});

// Create a new product and save it to the database
app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Update a specific product from the Id
app.put("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Delete a specific product from the Id
app.delete("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Connect to MongoDB using Mongoose
mongoose
  .connect(
    "mongodb+srv://arjupallufd:1vF2s9Znq8I5qG0y@backenddev.mc217.mongodb.net/BackendDev?retryWrites=true&w=majority&appName=BackendDev"
  )
  .then(() => {
    console.log("Connected to DB");
  });
