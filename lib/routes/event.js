/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var express = require('express');
var responseHandler = require('../responsehandler');


var router = express.Router();

router.route('/')
  .post(function(req, res) {
    createEvent(req, res);
  });


/**
 * Create an event.
 * @param {Object} req The HTTP request.
 * @param {Object} res The HTTP result.
 */
function createEvent(req, res) {
  var event = req.body.event;
  var tiraid = req.body.tiraid;
  var rootUrl = req.protocol + '://' + req.get('host');
  var queryPath = req.originalUrl;
  req.instance.addEvent(event, tiraid, rootUrl, queryPath,
                        function(response, status) {
    res.status(status).json(response);
  });
}


module.exports = router;
