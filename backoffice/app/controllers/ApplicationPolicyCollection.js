'use strict';

var utils = require('../utils/writer.js');
var ApplicationPolicyCollection = require('../service/ApplicationPolicyCollectionService');

module.exports.throttlingPoliciesApplicationGET = function throttlingPoliciesApplicationGET (req, res, next, accept) {
  ApplicationPolicyCollection.throttlingPoliciesApplicationGET(accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesApplicationPOST = function throttlingPoliciesApplicationPOST (req, res, next, body, contentType) {
  ApplicationPolicyCollection.throttlingPoliciesApplicationPOST(body, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
