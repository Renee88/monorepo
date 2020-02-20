const express = require('express')
const router = express.Router()
var unirest = require("unirest");
var fs = require('fs');
const users = require('../../Users.json')
let talks = require('../../Talks.json')



router.get('/users', function (req, res) {
    res.send(users)
})

router.get('/talks', function (req, res) {
          res.send(talks);
})






module.exports = router