'use strict';

var utils = require('../utils/writer.js');
var ImportExport = require('../service/ImportExportService');

module.exports.exportThrottlingPolicy = function exportThrottlingPolicy (req, res, next, policyId, name, type, format) {
  ImportExport.exportThrottlingPolicy(policyId, name, type, format)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.importThrottlingPolicy = function importThrottlingPolicy (req, res, next, overwrite) {
  ImportExport.importThrottlingPolicy(overwrite)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
