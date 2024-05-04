//
const mongoose = require("mongoose");
// user shema(models)
const sessionFormationSchema = mongoose.Schema({
  name: String,
  duration: String,
  nbLearner: Number,
  price: String,
  category: String,
  formateurs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
//affect userShema to user model
const sessionformation = mongoose.model(
  "SessionFormation",
  sessionFormationSchema
);
// make user model exportable
module.exports = sessionformation;
