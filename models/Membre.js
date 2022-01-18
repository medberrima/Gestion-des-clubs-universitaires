const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membreSchema = new Schema({
  "etudiant": { type: mongoose.Schema.Type.ObjectId, ref: "etudiant" },
  "Role": {type: "String", required: true},
  "room": {type: mongoose.Schema.Type.ObjectId,ref: "room" },
  "club": {type: mongoose.Schema.Type.ObjectId, ref: "club"},
});

module.exports = Membre = mongoose.model("membre", membreSchema);