const express = require("express");
const router = express.Router();
const controllers = require("../controllers/club.controllers");


router.post("/", controllers.postClub);


router.get('/', controllers.GetAllClub)


router.get('/:id',controllers.GetClubById)

router.delete('/:id',controllers.deleteClub)


router.put('/:id',controllers.updateClub)

module.exports = router;