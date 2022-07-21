const express = require('express')
const foodController = require('../components/Food')

const foodRouter = express.Router()
foodRouter.route("/food")
.get(foodController.apiController)
module.exports = foodRouter