//
const mongoose = require("mongoose");
// user shema(models)
const factureSchema = mongoose.Schema({
  clientName: String,
  date: String,
  serviceDescription: String,
  totalPrice: String,
  methodOfPayment: String,
});
//affect userShema to user model
const facture = mongoose.model("Facture", factureSchema);
// make user model exportable
module.exports = facture;
