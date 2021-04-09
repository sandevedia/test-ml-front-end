var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
var port = process.env.PORT || 3010;
var http = require("http");
var cors = require("cors");
var itemRoutes = require("./routes/itemsRoutes");

var app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use("/api/items", itemRoutes);

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

var httpServer = http.createServer(app);
httpServer.listen(port);
console.log("funcionando en puerto 3010");

module.exports = app;
