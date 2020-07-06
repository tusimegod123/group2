const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const server = express();

server.get("/", (req, res) => {
    res.sendfile('index.html')
  
});
server.post('/student',(req,res)=>{
var studentSchema = new mongoose.Schema({
  fName: String,
  sName: String,
  subject: String,
});
//console.log('success');
var studentSchema = mongoose.model("Student", studentSchema);
})

mongoose.connect(
  "mongodb://localhost:27017/group2",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) throw err;
    console.log("Successfully connected");
  }
);

server.listen(2010, function () {
  console.log("listening on 2010");
});
