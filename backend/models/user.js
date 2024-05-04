//
const mongoose = require("mongoose");
// user shema(models)
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  tel: Number,
  adress: String,
  password: String,
  role: String,
  avatar: String,
  status: String,
  payement: String,
  groupesID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Groupe",
    },
  ],
  formationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Formation",
  },
  sessionsID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SessionFormation",
    },
  ],
});
//affect userShema to user model
const user = mongoose.model("User", userSchema);
// make user model exportable
module.exports = user;
