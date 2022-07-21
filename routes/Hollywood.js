const express = require('express')
const hollyController = require('../components/Hollywood')

const hollyRouter = express.Router()
hollyRouter.route("/holly")
.get(hollyController.apiController)
module.exports = hollyRouter