"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var unirest = require("unirest");
var fs = require('fs');
var users = require('../../Users.json');
var talks = require('../../Talks.json');
router.get('/users/:page', function (req, res) {
    var page = req.params.page;
    var firstUserIndex = (page - 1) * 10;
    var usersOnPage = users.splice(firstUserIndex, 10);
    res.send(usersOnPage);
});
router.get('/user/:id', function (req, res) {
    var response;
    try {
        var id_1 = req.params.id;
        var user = users.find(function (user) { return user.id == id_1; });
        if (user) {
            response = {
                data: user,
                success: true
            };
        }
        else {
            throw new Error('User does not exist');
        }
    }
    catch (error) {
        response = {
            success: false,
            error: error.message,
            errorCode: '404'
        };
    }
    res.send(response);
});
router.post('/user', function (req, res) {
    var newUser = req.body;
    var response;
    try {
        if (newUser) {
            response = {
                data: newUser,
                success: true
            };
        }
        else {
            throw new Error('Something went wrong, please try again later');
        }
    }
    catch (error) {
        response = {
            success: false,
            error: error.message,
            errorCode: '500'
        };
    }
    res.send(response);
});
router.get('/talks', function (req, res) {
    res.send(talks);
});
process.on('warning', function (e) { return console.warn(e.stack); });
module.exports = router;
//# sourceMappingURL=api.js.map