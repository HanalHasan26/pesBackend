const express = require("express");
const {trending, AddTrending, removeTrending} = require("./Controllers/AdminController");

const router = express.Router();



router.route('/').put(AddTrending).get(trending)
router.route('/removeTrending').put(removeTrending)


module.exports =router;  