let express = require("express");
let app = express();
let formidable = require("express-formidable");
let fs = require("fs");
let Database = require("nedb");

app.listen(7000, function () {
    console.log("Server is listening & ready on port 7000.");
});

app.use(express.static("public"));

app.use(formidable());

let database = new Database({
    filename: __dirname + "/database/plants.json",
    autoload: true
});

app.post("/water-plants", function (req, res) {
    let name = req.fields.plant;
    database.update({
        name: name
    }, {
        $set: {
            watered: new Date()
        }
    }, {}, function () {
        res.redirect("/");
    });
});

app.post("/create-plant", function (req, res) {
    database.insert({
        name: req.fields.plantText
    }, function (error, result) {
        res.redirect("/");
    });
});

app.post("/remove-plant", function (req, res) {
    let name = req.fields.plant;
    database.remove({
        name: name
    }, {}, function () {
        res.redirect("/");
    });
});


app.get("/get-plants", function (req, res) {
    database.find({}).sort({
        name: 1
    }).exec(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});