'use strict';

var utils = require('../utils/writer.js');
var TenantConfigSchema = require('../service/TenantConfigSchemaService');

module.exports.exportTenantConfigSchema = function exportTenantConfigSchema (req, res, next) {
  TenantConfigSchema.exportTenantConfigSchema()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
