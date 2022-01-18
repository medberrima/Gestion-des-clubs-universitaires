const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const eventSchema = new Schema({
  title: {type: String , required: true },
  type:{type: String, required: true },
  description:{type: String, required: true },
  date:{type: Date, default: Date.now  },
  duration:{type: String, required: true },
  place:{type: String, required: true },
  imageURL:{type: String },
  formateur:[String],
  etat: {type: String  },
  club: {type: mongoose.Schema.Types.ObjectId, ref: "club"},
  participant: [{
    etudiant:{ type: Schema.Types.ObjectId, ref: "etudiant" },
    Presence: {type: Boolean,default : false },
  }]
});

module.exports = Event= mongoose.model("event",eventSchema); 