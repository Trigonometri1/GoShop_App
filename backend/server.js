import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import { errorNotFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();
const app = express();

//* Middleware
// app.use((req, res, next) => {
//   console.log(res.originalUrl);
//   next();
// });

app.get("/", (req, res) => {
  res.send("///API is runnig perfectly///...");
});

//* Middleware
app.use("/api/products", productRoutes); //! link to router to get all products when response was sended "/api/products"
app.use(errorNotFound);
app.use(errorHandler);
const PORT = process.env.API_PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Backend is working on ${process.env.WORKING_ENV_MODE} mode port ${PORT}`
      .yellow.bold
  )
);
