import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  products: {
    type: [String],
  },
  pricesSum: {
    type: Number,
  },
});

export default mongoose.model("List", ListSchema);
