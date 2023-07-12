import mongoose from "mongoose";

const ListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    products: {
      type: Array,
    },
    savedPrices: {
      type: Array,
    },
    favProducts: {
      type: Array,
    }
  },
  { timestamps: true }
);

export default mongoose.model("List", ListSchema);