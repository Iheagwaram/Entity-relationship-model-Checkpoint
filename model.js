const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone_number: { type: String, default: null },
  role: { type: String, enum: ["member", "coach", "admin"], default: "member" },
  gym_id: { type: mongoose.Schema.Types.ObjectId, ref: "Gymnasium", required: true },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;
