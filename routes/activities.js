const express = require("express");
const router = express.Router();
const controllers = require("../controllers/activity.controllers");


router.post("/", controllers.postActivity);


router.get('/', controllers.GetAllActivity)


router.get('/:id',controllers.GetActivityById)

router.delete('/:id',controllers.deleteActivity)


router.put('/:id',controllers.updateActivity)

module.exports = router;