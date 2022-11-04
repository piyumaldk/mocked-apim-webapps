'use strict';

var utils = require('../utils/writer.js');
var DenyPolicyIndividual = require('../service/DenyPolicyIndividualService');

module.exports.throttlingDeny_policyConditionIdDELETE = function throttlingDeny_policyConditionIdDELETE (req, res, next, conditionId) {
  DenyPolicyIndividual.throttlingDeny_policyConditionIdDELETE(conditionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingDeny_policyConditionIdGET = function throttlingDeny_policyConditionIdGET (req, res, next, conditionId) {
  DenyPolicyIndividual.throttlingDeny_policyConditionIdGET(conditionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingDeny_policyConditionIdPATCH = function throttlingDeny_policyConditionIdPATCH (req, res, next, body, conditionId, contentType) {
  DenyPolicyIndividual.throttlingDeny_policyConditionIdPATCH(body, conditionId, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
