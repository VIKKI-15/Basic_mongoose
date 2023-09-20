const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;
