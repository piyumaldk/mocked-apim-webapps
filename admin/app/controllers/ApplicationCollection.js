'use strict';

var utils = require('../utils/writer.js');
var ApplicationCollection = require('../service/ApplicationCollectionService');

module.exports.applicationsGET = function applicationsGET (req, res, next, user, limit, offset, accept, name, tenantDomain, sortBy, sortOrder) {
  ApplicationCollection.applicationsGET(user, limit, offset, accept, name, tenantDomain, sortBy, sortOrder)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
