import express from "express";
const router = express.Router();
import Product from "../models/productsDataModel.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

//* @desc -> Fetches all products
//* @route -> GET /api/products
//* @acces -> Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//* @desc -> Fetches single product
//* @route -> GET /api/products/:id
//* @acces -> Public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404);
        throw new Error("Product Not Found");
      }
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default router;
