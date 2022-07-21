const express = require('express')
const fitController = require('../components/Fitness')

const fitRouter = express.Router()
fitRouter.route("/fit")
.get(fitController.apiController)
module.exports = fitRouter