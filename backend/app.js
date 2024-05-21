//configuration - import
const cors = require("cors");
//import BE express module
const express = require("express");
const app = express();
// REQ CORS autorisation
app.use(cors());
// create app
module.exports = app;
//import body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");
// connect app to mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecoleDB");
// import models
const user = require("./models/user");
// import json web token module
const jwt = require("jsonwebtoken");

// Importez le module jwt-decode
const jwt_decode = require("jwt-decode");

// Assurez-vous que votre fichier est un module CommonJS
module.exports = app;

// import express session module
const session = require("express-session");
// import axios module
const axios = require("axios");
//import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
//import express session
const path = require("path");
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",

    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );

  next();
});
// importation des modèles
const User = require("./models/user");
const Formation = require("./models/formation");
const Groupe = require("./models/groupe");
const Devis = require("./models/devis");
const Facture = require("./models/facture");
const SessionFormation = require("./models/session-formation");
const Demande = require("./models/demande");
const cours = require("./models/cours");
//
// Importer les routes
const demandeRoutes = require("./routes/demandeRoutes"); // Importer la route des demandes

// Utilisation des routes
app.use("/api/demandes", demandeRoutes); // Utiliser la route des demandes

// Route pour obtenir les statistiques des demandes
app.get("/api/statistics", async (req, res) => {
  try {
    const totalDemandes = await Demande.countDocuments();
    const demandesBySexe = await Demande.aggregate([
      { $group: { _id: "$sexe", count: { $sum: 1 } } },
    ]);
    const demandesByTitleFormation = await Demande.aggregate([
      { $group: { _id: "$titleFormation", count: { $sum: 1 } } },
    ]);

    res.json({
      totalDemandes,
      demandesBySexe,
      demandesByTitleFormation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des statistiques des demandes",
      error,
    });
  }
});
module.exports = app;

// configuration
const secretKey = "projetEcole2024";
app.use(
  session({
    secret: secretKey,
  })
);
//
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     // autres options de configuration de session
//   })
// );
//
app.use(
  session({
    secret: "croco2024-venus",
    resave: false,
    saveUninitialized: true,
  })
);
//
app.use(
  "/shortCutPath",
  express.static(path.join("backend/users/avatars/images"))
);
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    if (isValid) {
      cb(null, "backend/users/avatars/images");
    } else {
      cb(new Error("Invalid file type."), null); // Ajout de la gestion d'erreur pour les types de fichiers non pris en charge
    }
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});
//

////////////////////////////////////////
// BL Get all  formations
app.get("/formations", (req, res) => {
  //traitement logique
  console.log("here into BL : get all formations ");
  Formation.find().then((docs) => {
    res.json({ formations: docs });
  });
});
// BL Get formations by ID
app.get("/formations/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : get formation by ID ", req.params.id);
  let formationId = req.params.id;
  Formation.findById(formationId).then((doc) => {
    res.json({ formation: doc });
  });
});
// BL Delete formations by ID
app.delete("/formations/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : delete formation  ", req.params.id);
  let formationId = req.params.id;
  Formation.deleteOne({ _id: formationId }).then((response) => {
    console.log("here response after delete one ", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "done" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
// BL Add formations
app.post("/formations", (req, res) => {
  //traitement logique
  console.log("here into BL : add formation  ");
  let formationObj = new Formation(req.body);
  formationObj.save();
  res.json({ msg: "formation ajoutée " });
});

// BL Edit formations
app.put("/formations", (req, res) => {
  //traitement logique
  console.log("here into BL : edit formation", req.body);
  let formationId = req.body._id;
  Formation.updateOne({ _id: formationId }, req.body).then((result) => {
    console.log("here result", result);
    if (result.modifiedCount == 1) {
      res.json({ msg: "edited with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
///////////////////////////////////////////
// BL Get all  sessions formations
app.get("/sessionsFormations", (req, res) => {
  //traitement logique
  console.log("here into BL : get all sessionsFormations ");
  SessionFormation.find().then((docs) => {
    res.json({ sessionFormation: docs });
  });
});
// BL Get session formation by ID
app.get("/sessionsFormations/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : get sessionsFormations by ID ", req.params.id);
  let sessionFormationId = req.params.id;
  SessionFormation.findById(sessionFormationId).then((doc) => {
    res.json({ sessionFormation: doc });
  });
});
// BL Delete session formation by ID
app.delete("/sessionsFormations/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : delete sessionsFormations  ", req.params.id);
  let sessionFormationId = req.params.id;
  SessionFormation.deleteOne({ _id: sessionFormationId }).then((response) => {
    console.log("here response after delete one ", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "done" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
// BL Add session formation
app.post("/sessionsFormations", (req, res) => {
  //traitement logique
  console.log("here into BL : add session formation  ");
  let sessionFormationObj = new SessionFormation(req.body);
  sessionFormationObj.save();
  res.json({ msg: "session formation ajoutée " });
});
// BL Edit session formation
app.put("/sessionsFormations", (req, res) => {
  //traitement logique
  console.log("here into BL : edit session  formation", req.body);
  let sessionFormationId = req.body._id;
  SessionFormation.updateOne({ _id: sessionFormationId }, req.body).then(
    (result) => {
      console.log("here result", result);
      if (result.modifiedCount == 1) {
        res.json({ msg: "edited with success" });
      } else {
        res.json({ msg: "error" });
      }
    }
  );
});
///////////////////////////////////////////
// BL Get all  cours
app.get("/cours", (req, res) => {
  //traitement logique
  console.log("here into BL : get all cours ");
  cours.find().then((docs) => {
    res.json({ cours: docs });
  });
});
// BL Get cours by ID
app.get("/cours/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : get cours by ID ", req.params.id);
  let coursId = req.params.id;
  cours.findById(coursId).then((doc) => {
    res.json({ cours: doc });
  });
});
// BL Delete cours by ID
app.delete("/cours/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : delete cours  ", req.params.id);
  let coursId = req.params.id;
  cours.deleteOne({ _id: coursId }).then((response) => {
    console.log("here response after delete one ", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "done" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
// BL Add cours
app.post("/cours", (req, res) => {
  //traitement logique
  console.log("here into BL : add cours  ");
  let coursObj = new cours(req.body);
  coursObj.save();
  res.json({ msg: " cours ajouté " });
});
// BL Edit cours
app.put("/cours", (req, res) => {
  //traitement logique
  console.log("here into BL : edit cours", req.body);
  let coursId = req.body._id;
  cours.updateOne({ _id: coursId }, req.body).then((result) => {
    console.log("here result", result);
    if (result.modifiedCount == 1) {
      res.json({ msg: "edited with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
///////////////////////////////////////////
// BL Get all  groups
app.get("/groupes", (req, res) => {
  //traitement logique
  console.log("here into BL : get all groupes ");
  Groupe.find().then((docs) => {
    res.json({ groupes: docs });
  });
});
// BL Get group by ID
app.get("/groupes/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : edit groupe by id ", req.params.id);
  let groupeId = req.params.id;
  Groupe.findById(groupeId).then((doc) => {
    res.json({ groupe: doc });
  });
});
// BL Delete group by ID
app.delete("/groupes/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : delete groupe by id ", req.params.id);
  let groupeId = req.params.id;
  Groupe.deleteOne({ _id: groupeId }).then((response) => {
    console.log("here response after delete one ", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "done" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
// BL Add groupes
app.post("/groupes", (req, res) => {
  //traitement logique0
  console.log("here into BL : add groupe  ");
  let groupeObj = new Groupe(req.body);
  groupeObj.save();
  res.json({ msg: "groupe ajoutée " });
});
// BL Edit groupes
app.put("/groupes", (req, res) => {
  //traitement logique
  console.log("here into BL : edit groupe ", req.body);
  let groupeId = req.body._id;
  Groupe.updateOne({ _id: groupeId }, req.body).then((result) => {
    console.log("here result", result);
    if (result.modifiedCount == 1) {
      res.json({ msg: "edited with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
/////////////////////////////////////////////
// BL Get all  devis
app.get("/devis", (req, res) => {
  //traitement logique
  console.log("here into BL : get all devis");
  //traitement logique
  Devis.find().then((docs) => {
    res.json({ deviss: docs });
  });
});
// BL Get devis by ID
app.get("/devis/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : edit devis by id ", req.params.id);
  let devisId = req.params.id;
  Devis.findById(devisId).then((doc) => {
    res.json({ devis: doc });
  });
});
// BL Delete devis by ID
app.delete("/devis/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : delete devis by id  ", req.params.id);
  let devisId = req.params.id;
  Devis.deleteOne({ _id: devisId }).then((response) => {
    console.log("here response after delete one ", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "done" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
// BL Add devis
app.post("/devis", (req, res) => {
  //traitement logique
  console.log("here into BL : add devis ");
  let devisObj = new Devis(req.body);
  devisObj.save();
  res.json({ msg: "devis ajoutée " });
});
// BL Edit devis
app.put("/devis", (req, res) => {
  //traitement logique
  console.log("here into BL : edit devis ", req.body);
  let devisId = req.body._id;
  Devis.updateOne({ _id: devisId }, req.body).then((result) => {
    console.log("here result", result);
    if (result.modifiedCount == 1) {
      res.json({ msg: "edited with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
/////////////////////////////////////////////
// BL Get all  factures
app.get("/factures", (req, res) => {
  //traitement logique
  console.log("here into BL : get all factures");
  //traitement logique
  Facture.find().then((docs) => {
    res.json({ facture: docs });
  });
});
// BL Get facture by ID
app.get("/factures/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : edit facture by id  ", req.params.id);
  let factureId = req.params.id;
  Facture.findById(factureId).then((doc) => {
    res.json({ facture: doc });
  });
});
// BL Delete facture by ID
app.delete("/factures/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : delete facture by id  ", req.params.id);
  let factureId = req.params.id;
  Facture.deleteOne({ _id: factureId }).then((response) => {
    console.log("here response after delete one ", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "done" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
// BL Add facture
app.post("/factures", (req, res) => {
  //traitement logique
  console.log("here into BL : add facture ");
  let factureObj = new Facture(req.body);
  factureObj.save();
  res.json({ msg: "facture ajoutée " });
});
// BL Edit facture
app.put("/factures", (req, res) => {
  //traitement logique
  console.log("here into BL : edit facture ", req.body);
  let factureId = req.body._id;
  Facture.updateOne({ _id: factureId }, req.body).then((result) => {
    console.log("here result", result);
    if (result.modifiedCount == 1) {
      res.json({ msg: "edited with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
/////////////////////////////////////////////
// BL Get all  demandes
app.get("/demandes", (req, res) => {
  //traitement logique
  console.log("here into BL : get all demandes");
  //traitement logique
  Demande.find().then((docs) => {
    res.json({ demandes: docs });
  });
});
// BL Get demande by ID
app.get("/demandes/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : edit demande by id  ", req.params.id);
  let demandeId = req.params.id;
  Demande.findById(demandeId).then((doc) => {
    res.json({ demande: doc });
  });
});
// BL Delete demande by ID
app.delete("/demandes/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : delete demande by id  ", req.params.id);
  let demandeId = req.params.id;
  Demande.deleteOne({ _id: demandeId }).then((response) => {
    console.log("here response after delete one ", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "done" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
//BL Add demande
app.post("/demandes", (req, res) => {
  //traitement logique0
  console.log("here into BL : add demande ");
  let demandeObj = new Demande(req.body);
  demandeObj.save();
  res.json({ msg: "demande ajoutée " });
});

// BL Edit demande
app.put("/demandes", (req, res) => {
  //traitement logique
  console.log("here into BL : edit demande ", req.body);
  let demandeId = req.body._id;
  Demande.updateOne({ _id: demandeId }, req.body).then((result) => {
    console.log("here result", result);
    if (result.modifiedCount == 1) {
      res.json({ msg: "edited with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
////////////////////////////////////////////
//BL signup
app.post("/users/sInscrire", (req, res) => {
  console.log("here into bl : signup", req.body);
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
        console.log("here crypted password", cryptedPwd);

        let userObj = new User(req.body);
        userObj.password = cryptedPwd; // Assigner le mot de passe crypté à l'objet utilisateur
        userObj.status = "bloqué"; // Affecter le statut "bloqué" à l'objet utilisateur
        userObj.payement = "non payé"; // Affecter le statut "bloqué" à l'objet utilisateur

        userObj
          .save()
          .then((doc) => {
            res.json({ msg: "added with success" });
          })
          .catch((err) => {
            res.json({ msg: "error" });
          });
      });
    } else {
      res.json({ msg: "email exists" });
    }
  });
});

//Get all users
app.get("/users", (req, res) => {
  //traitement logique
  console.log("here into BL : get all users ");
  User.find().then((docs) => {
    res.json({ users: docs });
  });
});
// Bl : login

app.post("/users/seConnecter", (req, res) => {
  console.log("here into Bl:login", req.body);
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password).then((pwdResult) => {
        if (pwdResult) {
          let obj = {
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            role: user.role,
            email: user.email,
            id: user._id,
          };
          const token = jwt.sign(obj, secretKey, { expiresIn: "1h" });
          res.json({
            token: token,
            msg: "Welcome",
          });
        } else {
          res.json({ msg: "Please check your password!" });
        }
      });
    } else {
      res.json({ msg: "Please check your email!" });
    }
  });
});
//Get user by id
app.get("/users/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : edit user by id  ", req.params.id);
  let userId = req.params.id;
  User.findById(userId).then((doc) => {
    res.json({ user: doc });
  });
});

// BL Delete user by ID
app.delete("/users/:id", (req, res) => {
  //traitement logique
  console.log("here into BL : delete user by id  ", req.params.id);
  let userId = req.params.id;
  User.deleteOne({ _id: userId }).then((response) => {
    console.log("here response after delete one ", response);
    if (response.deletedCount == 1) {
      res.json({ msg: "done" });
    } else {
      res.json({ msg: "error" });
    }
  });
});

//LES AFFECTATIONS DES UTILISATEURS
app.post("/users", async (req, res) => {
  console.log("here into bl: add user ", req.body);

  try {
    // Recherche si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.json({ msg: "User does not exist" });
    }

    // Vérifier le rôle de l'utilisateur
    if (existingUser.role === "apprenant") {
      // Logique pour les apprenants
      // Vérifier si l'apprenant est déjà affecté à un groupe
      if (existingUser.groupesID.includes(req.body.groupeID)) {
        return res.json({ msg: "L'apprenant est déjà ajouté à ce groupe !" });
      }

      // Recherche du groupe avec l'ID fourni
      const groupeObj = await Groupe.findById(req.body.groupeID);
      if (!groupeObj) {
        return res.json({ msg: "Groupe inexistant ! " });
      }

      // Affectez l'utilisateur au groupe et sauvegardez
      groupeObj.apprenants.push(existingUser._id);
      existingUser.groupesID.push(req.body.groupeID);
      await Promise.all([groupeObj.save(), existingUser.save()]);
      return res.json({ msg: "Apprenant affecté au groupe" });
    } else if (existingUser.role === "formateur") {
      // Logique pour les formateurs
      // Recherche de la session de formation avec l'ID fourni
      const sessionObj = await SessionFormation.findById(req.body.sessionID);
      if (!sessionObj) {
        return res.json({ msg: "SessionFormation not found" });
      }

      // Vérifier si le formateur est déjà associé à cette session de formation
      if (sessionObj.formateurs.includes(existingUser._id)) {
        return res.json({
          msg: "Formateur already assigned to this SessionFormation",
        });
      }

      // Associer la session de formation au formateur et sauvegarder
      existingUser.sessionsID.push(req.body.sessionID);
      sessionObj.formateurs.push(existingUser._id);
      await Promise.all([existingUser.save(), sessionObj.save()]);
      return res.json({
        msg: "Formateur assigned to SessionFormation successfully",
      });
    } else {
      // Si le rôle de l'utilisateur n'est ni apprenant ni formateur, renvoyer un message d'erreur
      return res.json({ msg: "Invalid user role" });
    }
  } catch (error) {
    console.error("Error assigning user:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});
// BL Edit user
app.put("/users", (req, res) => {
  //traitement logique
  console.log("here into BL : edit user ", req.body);
  let userId = req.body._id;
  User.updateOne({ _id: userId }, req.body).then((result) => {
    console.log("here result", result);
    if (result.modifiedCount == 1) {
      res.json({ msg: "edited with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});
// / Définir la route pour /api/demandes/chart-data
app.get("/api/demandes/chart-data", (req, res) => {
  // Ici, vous pouvez placer la logique pour récupérer les données de graphique depuis votre base de données ou un autre endroit
  // Exemple de données de graphique fictives
  const chart1Data = [
    { label: "Label 1", value: 10 },
    { label: "Label 2", value: 20 },
    { label: "Label 3", value: 30 },
  ];

  const chart2Data = [
    // Ajoutez les données pour le deuxième graphique ici si nécessaire
  ];

  // Renvoyer les données de graphique au format JSON
  res.json({ chart1Data, chart2Data });
});
