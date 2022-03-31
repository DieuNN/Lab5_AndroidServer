var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Product = require('../models/Product')

/* GET home page. */
router.post('/delete/:id', function (req, res, next) {
    Product.deleteOne({id: req.params.id}, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("deleted")
            res.redirect(300, '/list')
        }
    })
});


module.exports = router;
