'use strict';

var utils = require('../utils/writer.js');
var ApplicationPolicyIndividual = require('../service/ApplicationPolicyIndividualService');

module.exports.throttlingPoliciesApplicationPolicyIdDELETE = function throttlingPoliciesApplicationPolicyIdDELETE (req, res, next, policyId) {
  ApplicationPolicyIndividual.throttlingPoliciesApplicationPolicyIdDELETE(policyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesApplicationPolicyIdGET = function throttlingPoliciesApplicationPolicyIdGET (req, res, next, policyId) {
  ApplicationPolicyIndividual.throttlingPoliciesApplicationPolicyIdGET(policyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesApplicationPolicyIdPUT = function throttlingPoliciesApplicationPolicyIdPUT (req, res, next, body, policyId, contentType) {
  ApplicationPolicyIndividual.throttlingPoliciesApplicationPolicyIdPUT(body, policyId, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
