import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  priceLidl: {
    type: Number,
  },
  priceBiedronka: {
    type: Number,
  },
  priceCarrefour: {
    type: Number,
  },
  priceKaufland: {
    type: Number,
  },
});

export default mongoose.model("Product", ProductSchema);