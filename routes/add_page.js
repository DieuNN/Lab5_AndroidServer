var express = require('express');
var router = express.Router();
const Product = require("../models/Product")
const mongoose = require("mongoose");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('add_page', {message: ''});
});

router.post('/add-new', (req, res) => {
    const productName = req.body.productName
    const productDescription = req.body.productDescription
    const productImageLink = req.body.productImageLink

    const data = new Product({
        productName: productName,
        productDescription: productDescription,
        productImageLink: productImageLink
    })

    data.save()

    res.render("add_page", {message:"Add successful"})
})

module.exports = router;
