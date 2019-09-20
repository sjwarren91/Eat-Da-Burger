var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        
        console.log({burgers: data})

        res.render("index", {burgers: data})

    })
})



module.exports = router;