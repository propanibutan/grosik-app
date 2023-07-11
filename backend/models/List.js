import mongoose from "mongoose";

const ListSchema = new mongoose.Schema(
  {
    // id: {
    //   type: Number,
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
    },
    pricesSum: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("List", ListSchema);