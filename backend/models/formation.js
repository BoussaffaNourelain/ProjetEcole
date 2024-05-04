//
const mongoose = require("mongoose");
// user shema(models)
const formationSchema = mongoose.Schema({
  name: String,
  duration: String,
  nbLearner: Number,
  price: String,
  category: String,
  formateurID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
//affect userShema to user model
const formation = mongoose.model("Formation", formationSchema);
// make user model exportable
module.exports = formation;
