const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const roomSchema = new Schema({
  "msg" : {type: mongoose.Schema.Type.ObjectId, ref: "message" },
  "club" : {type: mongoose.Schema.Type.ObjectId, ref: "club"},
  "membres":[{type: mongoose.Schema.Type.ObjectId,ref: "etudiant"}]
});

module.exports = Room= mongoose.model("room",roomSchema); 