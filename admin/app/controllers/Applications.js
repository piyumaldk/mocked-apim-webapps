'use strict';

var utils = require('../utils/writer.js');
var Applications = require('../service/ApplicationsService');

module.exports.applicationsApplicationIdDELETE = function applicationsApplicationIdDELETE (req, res, next, applicationId) {
  Applications.applicationsApplicationIdDELETE(applicationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.applicationsApplicationIdGET = function applicationsApplicationIdGET (req, res, next, applicationId) {
  Applications.applicationsApplicationIdGET(applicationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
