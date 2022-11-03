'use strict';

var utils = require('../utils/writer.js');
var BotDetectionAlertSubscriptions = require('../service/BotDetectionAlertSubscriptionsService');

module.exports.getBotDetectionAlertSubscriptions = function getBotDetectionAlertSubscriptions (req, res, next) {
  BotDetectionAlertSubscriptions.getBotDetectionAlertSubscriptions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subscribeForBotDetectionAlerts = function subscribeForBotDetectionAlerts (req, res, next, body) {
  BotDetectionAlertSubscriptions.subscribeForBotDetectionAlerts(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unsubscribeFromBotDetectionAlerts = function unsubscribeFromBotDetectionAlerts (req, res, next, uuid) {
  BotDetectionAlertSubscriptions.unsubscribeFromBotDetectionAlerts(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
