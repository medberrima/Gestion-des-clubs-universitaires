const express = require("express");
const router = express.Router();
const controllers = require("../controllers/event.controllers");

// @Method get
// @desc post a evenement
// @path : http://localhost:5000/api/evenement
// Params Body
router.post("/", controllers.postEvent);


// @Method get
// @desc Get all evenement
// @path : http://localhost:5000/api/evenement
router.get('/', controllers.GetAllEvent)

// @Method get
// @desc Get evenement by id
// @path : http://localhost:5000/api/evenement/:id
// @params id
router.get('/:id',controllers.GetEventById)

// @Method delete
// @desc Delete evenement by id
// @path : http://localhost:5000/api/evenement/:id
// @params id
router.delete('/:id',controllers.deleteEvent)

// @Method Put
// @desc update evenement by id
// @path : http://localhost:5000/api/evenement/:id
// @params id Body
router.put('/:id',controllers.updateEvent)

module.exports = router;