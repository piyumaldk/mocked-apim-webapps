'use strict';

var utils = require('../utils/writer.js');
var AdvancedPolicyIndividual = require('../service/AdvancedPolicyIndividualService');

module.exports.throttlingPoliciesAdvancedPolicyIdDELETE = function throttlingPoliciesAdvancedPolicyIdDELETE (req, res, next, policyId) {
  AdvancedPolicyIndividual.throttlingPoliciesAdvancedPolicyIdDELETE(policyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesAdvancedPolicyIdGET = function throttlingPoliciesAdvancedPolicyIdGET (req, res, next, policyId) {
  AdvancedPolicyIndividual.throttlingPoliciesAdvancedPolicyIdGET(policyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesAdvancedPolicyIdPUT = function throttlingPoliciesAdvancedPolicyIdPUT (req, res, next, body, policyId, contentType) {
  AdvancedPolicyIndividual.throttlingPoliciesAdvancedPolicyIdPUT(body, policyId, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
