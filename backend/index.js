import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import compareRoute from "./routes/compare.js";
import listsRoute from "./routes/lists.js";
import usersRoute from "./routes/users.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Mongo");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

//middlewares
app.use(express.json());

app.use("/compare", compareRoute);
app.use("/lists", listsRoute);
app.use("/users", usersRoute);

app.use((req, res, next)=>{
  console.log("middleware")
})

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
