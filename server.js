var express = require("express");

var app = express();
var routes = require("./routes.js")(app);

var server = app.listen(8080, function () {
    console.log("Server listening on port %s...", server.address().port);
});
