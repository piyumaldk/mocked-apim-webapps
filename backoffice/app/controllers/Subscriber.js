'use strict';

var utils = require('../utils/writer.js');
var Subscriber = require('../service/SubscriberService');

module.exports.getSubscriberInfoBySubscriptionId = function getSubscriberInfoBySubscriptionId (req, res, next, subscriptionId) {
  Subscriber.getSubscriberInfoBySubscriptionId(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
