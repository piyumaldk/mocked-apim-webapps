'use strict';

var utils = require('../utils/writer.js');
var AlertSubscriptions = require('../service/AlertSubscriptionsService');

module.exports.getSubscribedAlertTypes = function getSubscribedAlertTypes (req, res, next) {
  AlertSubscriptions.getSubscribedAlertTypes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subscribeToAlerts = function subscribeToAlerts (req, res, next, body) {
  AlertSubscriptions.subscribeToAlerts(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unsubscribeAllAlerts = function unsubscribeAllAlerts (req, res, next) {
  AlertSubscriptions.unsubscribeAllAlerts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
