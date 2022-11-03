'use strict';

var utils = require('../utils/writer.js');
var TenantConfig = require('../service/TenantConfigService');

module.exports.exportTenantConfig = function exportTenantConfig (req, res, next) {
  TenantConfig.exportTenantConfig()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTenantConfig = function updateTenantConfig (req, res, next, body) {
  TenantConfig.updateTenantConfig(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
