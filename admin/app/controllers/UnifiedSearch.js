'use strict';

var utils = require('../utils/writer.js');
var UnifiedSearch = require('../service/UnifiedSearchService');

module.exports.throttlingPolicySearch = function throttlingPolicySearch (req, res, next, query) {
  UnifiedSearch.throttlingPolicySearch(query)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
