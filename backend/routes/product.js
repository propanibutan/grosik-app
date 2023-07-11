import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

//CREATE
router.post("/:listid", createProduct);

//UPDATE
router.put("/:id", updateProduct);

//DELETE
router.delete("/:id", deleteProduct);

//GET
router.get("/:id", getProduct);

//GET ALL
router.get("/", getAllProducts);

export default router;
