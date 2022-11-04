'use strict';

var utils = require('../utils/writer.js');
var SubscriptionPolicyIndividual = require('../service/SubscriptionPolicyIndividualService');

module.exports.throttlingPoliciesSubscriptionPolicyIdDELETE = function throttlingPoliciesSubscriptionPolicyIdDELETE (req, res, next, policyId) {
  SubscriptionPolicyIndividual.throttlingPoliciesSubscriptionPolicyIdDELETE(policyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesSubscriptionPolicyIdGET = function throttlingPoliciesSubscriptionPolicyIdGET (req, res, next, policyId) {
  SubscriptionPolicyIndividual.throttlingPoliciesSubscriptionPolicyIdGET(policyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesSubscriptionPolicyIdPUT = function throttlingPoliciesSubscriptionPolicyIdPUT (req, res, next, body, policyId, contentType) {
  SubscriptionPolicyIndividual.throttlingPoliciesSubscriptionPolicyIdPUT(body, policyId, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
