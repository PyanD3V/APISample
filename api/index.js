var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/get', function (req, res) {
    res.json({ success: true, msg: "Funciona" });
});

app.post('/post', function (req, res) {
    if (req.body.username) {
        res.json({ success: true, msg: "Username correcto, escribiste: " + req.body.username });
    } else {
        res.json({ success: false, msg: "Username incorrecto" });
    };
});

app.listen(6969);