const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const etudiantSchema = new Schema({
  nomEtud: {type: String , required: true },
  prenomEtud:{type: String, required: true },
  username:{type: String, required: true, unique: true },
  cin:{type: String, required: true, unique: true },
  imageEtud:{type: String }, //bch twly type objet
  password:{type: String, required: true },
  niveau:{type: String, required: true },
  phone:{type: String, required: true },
  email:{type: String, required: true, unique: true },
});

module.exports = Etudiant= mongoose.model("etudiant",etudiantSchema); 