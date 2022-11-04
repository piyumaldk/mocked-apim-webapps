'use strict';

var utils = require('../utils/writer.js');
var APIMonetization = require('../service/APIMonetizationService');

module.exports.addAPIMonetization = function addAPIMonetization (req, res, next, body, runtimeId, apiId) {
  APIMonetization.addAPIMonetization(body, runtimeId, apiId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPIMonetization = function getAPIMonetization (req, res, next, runtimeId, apiId) {
  APIMonetization.getAPIMonetization(runtimeId, apiId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPIRevenue = function getAPIRevenue (req, res, next, runtimeId, apiId) {
  APIMonetization.getAPIRevenue(runtimeId, apiId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubscriptionUsage = function getSubscriptionUsage (req, res, next, subscriptionId) {
  APIMonetization.getSubscriptionUsage(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
