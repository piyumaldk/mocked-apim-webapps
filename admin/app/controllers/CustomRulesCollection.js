'use strict';

var utils = require('../utils/writer.js');
var CustomRulesCollection = require('../service/CustomRulesCollectionService');

module.exports.throttlingPoliciesCustomGET = function throttlingPoliciesCustomGET (req, res, next, accept) {
  CustomRulesCollection.throttlingPoliciesCustomGET(accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingPoliciesCustomPOST = function throttlingPoliciesCustomPOST (req, res, next, body, contentType) {
  CustomRulesCollection.throttlingPoliciesCustomPOST(body, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
