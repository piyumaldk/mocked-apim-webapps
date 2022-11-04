'use strict';

var utils = require('../utils/writer.js');
var TenantTheme = require('../service/TenantThemeService');

module.exports.exportTenantTheme = function exportTenantTheme (req, res, next) {
  TenantTheme.exportTenantTheme()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.importTenantTheme = function importTenantTheme (req, res, next) {
  TenantTheme.importTenantTheme()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
