import express from "express";
import { addList } from "../controllers/user.js";

const router = express.Router();

router.post("/add", addList);

router.get("/", (req, res) => {
  res.send("users endpoint");
});

export default router;
