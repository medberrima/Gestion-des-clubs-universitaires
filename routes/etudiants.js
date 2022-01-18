const express = require("express");
const router = express.Router();
const controllers = require("../controllers/etudiant.controllers");

router.post("/", controllers.postEtudiant);

router.get('/', controllers.GetAllEtudiant);

router.get('/:id',controllers.GetEtudiantById);

router.delete('/:id',controllers.deleteEtudiant);

router.put('/:id',controllers.updateEtudiant);

module.exports = router;