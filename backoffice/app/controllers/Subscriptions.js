'use strict';

var utils = require('../utils/writer.js');
var Subscriptions = require('../service/SubscriptionsService');

module.exports.blockSubscription = function blockSubscription (req, res, next, subscriptionId, blockState, ifMatch) {
  Subscriptions.blockSubscription(subscriptionId, blockState, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubscriptions = function getSubscriptions (req, res, next, apiId, limit, offset, ifNoneMatch, query) {
  Subscriptions.getSubscriptions(apiId, limit, offset, ifNoneMatch, query)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unBlockSubscription = function unBlockSubscription (req, res, next, subscriptionId, ifMatch) {
  Subscriptions.unBlockSubscription(subscriptionId, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
