'use strict';

var utils = require('../utils/writer.js');
var DenyPoliciesCollection = require('../service/DenyPoliciesCollectionService');

module.exports.throttlingDeny_policiesGET = function throttlingDeny_policiesGET (req, res, next, accept) {
  DenyPoliciesCollection.throttlingDeny_policiesGET(accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.throttlingDeny_policiesPOST = function throttlingDeny_policiesPOST (req, res, next, body, contentType) {
  DenyPoliciesCollection.throttlingDeny_policiesPOST(body, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
