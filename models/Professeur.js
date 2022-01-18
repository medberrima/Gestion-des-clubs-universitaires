const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const professeurSchema = new Schema({
    nomProf: {type: String , required: true },
    prenomProf:{type: String, required: true },
    username:{type: String, required: true, unique: true },
    imageProf:{type: String }, //bch twly type objet
    password:{type: String, required: true },
    phone:{type: String, required: true },
    email:{type: String, required: true, unique: true },
    clubs: [{type: mongoose.Schema.Type.ObjectId, ref: "club"}]
});

module.exports = Professeur= mongoose.model("professeur",professeurSchema);