import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("///API is runnig perfectly///...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.API_PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Backend is working on ${process.env.WORKING_ENV_MODE} mode port ${PORT}`
      .yellow.bold
  )
);
