//
const mongoose = require("mongoose");
// groupe shema(models)
const groupeSchema = mongoose.Schema({
  name: String,
  trainerName: String,
  nbLearner: Number,
  apprenants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
//affect userShema to groupe model
const groupe = mongoose.model("Groupe", groupeSchema);
// make user model exportable
module.exports = groupe;
