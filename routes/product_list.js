var express = require('express');
var router = express.Router();
const Product = require("../models/Product")
const mongoose = require("mongoose");

/* GET home page. */
router.get('/list', function (req, res, next) {

    let data;
    Product.find(async (error, result) => {
        if (error) {
            console.log(error)
        } else {
            data = Array.from(result)
            res.render('product_list', {data: data, deleteDoc:deleteDoc});
        }
    })
});

const deleteDoc = (id) => {
    console.log("Hi there")
    Product.deleteOne({id}, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("deleted")
        }
    })
}


module.exports = router;
