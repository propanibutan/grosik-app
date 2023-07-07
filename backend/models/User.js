import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
    name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  products: {
    type: [String],
  },
});

export default mongoose.model("Company", CompanySchema)