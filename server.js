let express = require("express");
let app = express();
let Database = require("nedb");
let database = new Database({
    filename: __dirname + "/database/plants.json",
    autoload: true
});

app.listen(3000, function () {
    console.log("Server is listening & ready on port 3000.");
});

app.use(express.static("public"));

app.post("/create-plant", function (req, res) {
    // database.insert({name: req.fields.plantText}, function(error, result) {
    //     res.redirect("/");
    // })
    console.log("Yay plants!");
});

app.get("/get-plants", function (req, res) {
    database.find({}).sort({ name: 1}).exec(function (err,docs) {
        console.log("Plant Party!");
    });
});