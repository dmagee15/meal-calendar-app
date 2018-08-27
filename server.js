const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passportJWT = require("passport-jwt");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const auth = require("./auth");
const jwtOptions = require("./jwtconfig");
const app = express();

require('dotenv').load();

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());
app.use(passport.initialize());

auth(passport, passportJWT, jwtOptions);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/todo");


app.use('/', routes);

// To add for deployment
app.use('/',express.static('public'));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})


const listener = app.listen(process.env.PORT || 3001,()=>
    console.log("Server is listening on "+process.env.PORT || listener.address().port)
)