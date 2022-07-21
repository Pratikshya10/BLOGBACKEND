const express = require('express');
const detailsController = require('../components/Details');
const detailsRouter = express.Router();
//express.Router is a function

detailsRouter.route("/Details")
.get(detailsController.apiController)
module.exports = detailsRouter;


