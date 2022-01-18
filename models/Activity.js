const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const activitySchema = new Schema({
  title : { type : "String", required : true },
  desc: {type : "String", required : true },
  place: {type : "String", required : true },
  date: {type : Date,required : true},
  club: {type: mongoose.Schema.Types.ObjectId, ref: "club"}
});
module.exports = activity= mongoose.model("activity",activitySchema);