const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const messageSchema = new Schema({
    "contenu": {"type": "String", "required": true },
  });

module.exports = Message= mongoose.model("message",messageSchema); 