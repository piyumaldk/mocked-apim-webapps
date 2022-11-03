'use strict';

var utils = require('../utils/writer.js');
var SubscriptionPolicyCollection = require('../service/SubscriptionPolicyCollectionService');

module.exports.throttlingPoliciesSubscriptionGET = function throttlingPoliciesSubscriptionGET (req, res, next, accept) {
  SubscriptionPolicyCollection.throttlingPoliciesSubscriptionGET(accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesSubscriptionPOST = function throttlingPoliciesSubscriptionPOST (req, res, next, body, contentType) {
  SubscriptionPolicyCollection.throttlingPoliciesSubscriptionPOST(body, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
