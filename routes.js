var os = require("os");
var util = require("util");
var http = require("http");

var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.send("I'm " + os.hostname());
    });

    app.get('/redirect/:service', function (req, res) {
        var serviceName = req.params.service
        var serviceUrl = ["http://", serviceName, ":", 8080];
        var url = serviceUrl.join();
        http.get(url, function (res) {
            res.on('data', function (chunk) {
                var response = util.format("Redirecting from [%s] to %s \nResponse: %s", os.hostname(), url, chunk);
                res.send(response);
            });
        }).end();
    });
}

module.exports = appRouter;
