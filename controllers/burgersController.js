var express = require('express');
var router = express();

var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});


router.post('/burger/devour/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});


module.exports = router;