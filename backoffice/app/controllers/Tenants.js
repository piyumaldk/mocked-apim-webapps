'use strict';

var utils = require('../utils/writer.js');
var Tenants = require('../service/TenantsService');

module.exports.getCustomUrlInfoByTenantDomain = function getCustomUrlInfoByTenantDomain (req, res, next, tenantDomain) {
  Tenants.getCustomUrlInfoByTenantDomain(tenantDomain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTenantInfoByUsername = function getTenantInfoByUsername (req, res, next, username) {
  Tenants.getTenantInfoByUsername(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
