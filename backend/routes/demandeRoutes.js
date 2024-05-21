const express = require("express");
const router = express.Router();
const Demande = require("../models/demande");

// Route pour obtenir toutes les demandes
router.get("/", async (req, res) => {
  try {
    const demandes = await Demande.find();
    res.json(demandes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajoutez d'autres routes pour les demandes ici, comme POST, PUT, DELETE, etc.

module.exports = router;
