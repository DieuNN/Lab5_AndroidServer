var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Product = require('../models/Product')

/* GET home page. */
router.get('/edit/:id', function (req, res, next) {
    return Product.findById(req.params.id, function (err, product) {
        if (err) {
            throw err;
        }
        return res.render('edit', {data: product})
    })
});

router.post('/edit/:id', (req, res) => {
    const productName = req.body.productName
    const productDescription = req.body.productDescription
    const productImageLink = req.body.productImageLink

    const newProduct = new Product({
        productName: productName,
        productDescription: productDescription,
        productImageLink: productImageLink
    })
    const update = async () => await Product.findOneAndUpdate(req.params.id, {
        productName: productName,
        productDescription: productDescription,
        productImageLink: productImageLink
    }, {new: false})
    update().then(r => {
        console.log("edit successful")
    })
    let data;
    Product.find(async (error, result) => {
        if (error) {
            console.log(error)
        } else {
            data = Array.from(result)
            res.render('product_list', {data: data});
        }
    })
})

module.exports = router;
