//
const mongoose = require("mongoose");
// groupe shema(models)
const groupeSchema = mongoose.Schema({
  name: String,
  trainerName: String,
  nbLearner: Number,
  apprenants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  formateurs: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  formationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Formation",
  },
  sessionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SessionFormation",
  },
  coursID: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cours" }],
});
//affect userShema to groupe model
const groupe = mongoose.model("Groupe", groupeSchema);
// make user model exportable
module.exports = groupe;
