//
const mongoose = require("mongoose");
// user shema(models)
const formationSchema = mongoose.Schema({
  name: String,
  datedebut: String,
  datefin: String,
  nbLearner: Number,
  price: String,
  category: String,
  formateurID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  groupesID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Groupe",
    },
  ],
});
//affect userShema to user model
const formation = mongoose.model("Formation", formationSchema);
// make user model exportable
module.exports = formation;
