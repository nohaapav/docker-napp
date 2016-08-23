var os = require("os");
var util = require("util");
var http = require("http");

var appRouter = function (app) {
    app.get("/", function (req, res) {
        var result = util.format("I'm %s \n", os.hostname()); 
        res.send(result);
    });

    app.get('/redirect/:service', function (req, res) {
        var serviceName = req.params.service
        var serviceUrl = ["http://", serviceName, ":", 8080];
        var url = serviceUrl.join("");
        var response
        http.get(url, function (response) {
            response.on('data', function (chunk) {
                var result = util.format("Redirecting from [%s] to %s \nResponse: %s", os.hostname(), url, chunk);
                res.send(result);
            });
        }).end();
    });
}

module.exports = appRouter;
