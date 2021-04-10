const express = require("express");
const mongoose = require("mongoose");
// const { Mongoose } = require("mongoose");
var app = express();

// Route
app.get("/", function(req, res){
    res.send("Hello World");
});

// MongoDb Connection
mongoose.connect("mongodb://localhost/test", {userNewUrlParser:true});

mongoose.connection.once("open", function() {
    console.log("Database connected successfully");
}).on("Error", function(err){
    console.log("Error", err);
});

//Server
app.listen(8000, function(){
    console.log("Server is up");
});