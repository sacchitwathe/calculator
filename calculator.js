//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;

  res.send("The result is "+ result);
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
  var w1 = parseFloat(req.body.weight);
  var h1 = parseFloat(req.body.height);
  var result2 = w1/(h1**2);

  res.send("The result is "+ result2);
})

app.listen(3000, function(){
  console.log("App listens on port 3000");
});
