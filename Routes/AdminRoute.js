const express = require("express");
const {  getPlayerId, updatePlayer, removePlayer, GetSlider, slider, trending} = require("./Controllers/AdminController");

const router = express.Router();



router.route('/').put(slider).get(GetSlider)
router.route('/:_id').get(getPlayerId)
router.route('/update').put(updatePlayer)
router.route('/remove').put(removePlayer)
router.route('/trending').get(trending)

module.exports =router;  