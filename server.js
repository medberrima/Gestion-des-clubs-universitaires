const express = require('express');
require('dotenv').config();
const dbConnect = require("./config/connectDB")
const app = express();

// connect DB 
dbConnect();

var cors = require('cors')
app.use(cors()) 

// Create route 
//middleware routing body parse
app.use(express.json());
app.use("/api/activity",require("./routes/activities"));
app.use("/api/evenement",require("./routes/events"));
app.use("/api/etudiant",require("./routes/etudiants"));
app.use("/api/club",require("./routes/clubs"));
// app.use("/api/participant",require("./routes/participant"));



const PORT = process.env.PORT ;
app.listen(PORT, (err) => 
  err ? console.error(err) : console.log(`serveur is runing`)
);