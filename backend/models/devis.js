//
const mongoose = require("mongoose");
// user shema(models)
const devisSchema = mongoose.Schema({
  clientName: String,
  productDescription: String,
  price: String,
  quantity: Number,
  validityDate: String,
});
//affect userShema to user model
const devis = mongoose.model("Devis", devisSchema);
// make user model exportable
module.exports = devis;
