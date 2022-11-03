'use strict';

var utils = require('../utils/writer.js');
var AdvancedPolicyCollection = require('../service/AdvancedPolicyCollectionService');

module.exports.throttlingPoliciesAdvancedGET = function throttlingPoliciesAdvancedGET (req, res, next, accept) {
  AdvancedPolicyCollection.throttlingPoliciesAdvancedGET(accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesAdvancedPOST = function throttlingPoliciesAdvancedPOST (req, res, next, body, contentType) {
  AdvancedPolicyCollection.throttlingPoliciesAdvancedPOST(body, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
