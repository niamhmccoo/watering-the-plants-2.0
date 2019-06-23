let express = require("express");
let app = express();
let formidable = require("express-formidable");
let fs = require("fs");
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
    console.log("Yay plants!");
});

app.get("/get-plants", function (req, res) {
    console.log("Plant Party!");
});