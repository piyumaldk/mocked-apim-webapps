'use strict';

var utils = require('../utils/writer.js');
var UnifiedSearch = require('../service/UnifiedSearchService');

module.exports.search = function search (req, res, next, limit, offset, query, ifNoneMatch) {
  UnifiedSearch.search(limit, offset, query, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
