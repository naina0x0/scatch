const express = require("express");
const router = express. Router();
const isloggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
router.get("/", function (req, res) {
    res.render("index", { error });
    let error= req.flash("erгor");
});
router.get("/shop", isloggedin,async function (req, res) {
 let product =   await  productModel.find()
res.render("shop.ejs",{product:product});
});
router.get("/logout", isloggedin, function (req, res) {
res.render("shop.ejs");
});
module.exports = router;