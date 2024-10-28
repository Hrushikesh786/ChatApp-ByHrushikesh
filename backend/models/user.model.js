import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    confirmPassword: {
      type: String,
    },
  },
  { timestamps: true }
); //created at updated at

const User = mongoose.model("User", userSchema);

export default User;
