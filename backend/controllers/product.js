import Product from "../models/Product.js";
import List from "../models/List.js";
import { createError } from "../utils/error.js";

export const createProduct = async (req, res, next) => {
  const listId = req.params.listid;
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    try {
      await List.findByIdAndUpdate(listId, {
        $push: { products: savedProduct._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedProduct);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (err) {
    next(err);
  }
};