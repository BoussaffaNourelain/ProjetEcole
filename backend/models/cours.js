//
const mongoose = require("mongoose");
// demande  shema(models)
const coursSchema = mongoose.Schema({
  descriptionLesson: String,
  categorie: String,
  file: String,

  groupesID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Groupe",
    },
  ],
});
//affect userShema to user model
const cours = mongoose.model("Cours", coursSchema);
// make user model exportable
module.exports = cours;
