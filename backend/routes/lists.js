import express from "express";
import {
  createList,
  deleteList,
  getAllLists,
  getList,
  updateList,
} from "../controllers/list.js";

const router = express.Router();

//CREATE
router.post("/create", createList);

//UPDATE
router.put("/:id", updateList);

//DELETE
router.delete("/:id", deleteList);

//GET
router.get("/:id", getList);

//GET ALL
router.get("/", getAllLists);

export default router;
