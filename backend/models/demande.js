//
const mongoose = require("mongoose");
// demande  shema(models)
const demandeSchema = mongoose.Schema({
  sexe: String,
  firstName: String,
  lastName: String,
  function: String,
  adress: String,
  dateOfBirth: String,
  titleFormation: String,
  duration: String,
  priceEstimation: String,
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
//affect userShema to user model
const demande = mongoose.model("Demande", demandeSchema);
// make user model exportable
module.exports = demande;
