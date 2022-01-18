const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const clubSchema = new Schema({
  nomClub: {type: String , required: true },
  descripClub:{type: String, required: true },
  email:{type: String, required: true },
  logoClub:{type: String }, //bch twly type objet
  DateCreation:{type: Date, required: true,},
  // professeur: [{type: mongoose.Schema.ObjectId, ref: 'professeur'}],
  events: [{type: mongoose.Schema.ObjectId, ref: 'event'}],
});

module.exports = Club= mongoose.model("club",clubSchema);