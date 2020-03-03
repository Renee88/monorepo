var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var api = require('./server/routes/api');
var port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.use('/', api);
app.listen(port, function () {
    console.log("Running on port " + port);
});
