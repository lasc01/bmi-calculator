const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 2345;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    var num1 = parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);

    var answer = num1 / (num2 * num2);

    // if(answer < 18.5){
    //     res.send("Your BMI is " + answer + ". You are underweight. Eat some food🤪");  
    // }

    // else if(answer > 18.6 && < 25){
    //     res.send("Your BMI is " + answer + ". You are normal. Nice job💪🏾");
    // }

    // else if(answer > 25.1){
    //     res.send("Your BMI is " + answer + ". You are overweight. Hit the gym😎");
    // }
    // else{
    // res.send("Your BMI is " + answer + ". You are obsessed, see a doctor😷");
    // }

    res.send("Your BMI is " + answer);
});

app.listen(port, function(){
    console.log("We are on port 2345");
});