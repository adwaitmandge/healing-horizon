const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  email: { type: String, required: true },
  email: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Admin = mongoose.Model("User", adminSchema);

module.exports = { Admin };
