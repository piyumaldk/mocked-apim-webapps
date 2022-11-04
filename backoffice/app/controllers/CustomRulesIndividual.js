'use strict';

var utils = require('../utils/writer.js');
var CustomRulesIndividual = require('../service/CustomRulesIndividualService');

module.exports.throttlingPoliciesCustomRuleIdDELETE = function throttlingPoliciesCustomRuleIdDELETE (req, res, next, ruleId) {
  CustomRulesIndividual.throttlingPoliciesCustomRuleIdDELETE(ruleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesCustomRuleIdGET = function throttlingPoliciesCustomRuleIdGET (req, res, next, ruleId) {
  CustomRulesIndividual.throttlingPoliciesCustomRuleIdGET(ruleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesCustomRuleIdPUT = function throttlingPoliciesCustomRuleIdPUT (req, res, next, body, ruleId, contentType) {
  CustomRulesIndividual.throttlingPoliciesCustomRuleIdPUT(body, ruleId, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
