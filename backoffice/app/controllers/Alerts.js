'use strict';

var utils = require('../utils/writer.js');
var Alerts = require('../service/AlertsService');

module.exports.getAdminAlertTypes = function getAdminAlertTypes (req, res, next) {
  Alerts.getAdminAlertTypes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
