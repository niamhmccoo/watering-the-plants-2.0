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
    console.log("Yay plants!");
});