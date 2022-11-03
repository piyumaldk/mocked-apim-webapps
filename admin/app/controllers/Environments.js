'use strict';

var utils = require('../utils/writer.js');
var Environments = require('../service/EnvironmentsService');

module.exports.environmentsEnvironmentIdDELETE = function environmentsEnvironmentIdDELETE (req, res, next, environmentId) {
  Environments.environmentsEnvironmentIdDELETE(environmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.environmentsEnvironmentIdPUT = function environmentsEnvironmentIdPUT (req, res, next, body, environmentId) {
  Environments.environmentsEnvironmentIdPUT(body, environmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.environmentsGET = function environmentsGET (req, res, next) {
  Environments.environmentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.environmentsPOST = function environmentsPOST (req, res, next, body) {
  Environments.environmentsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
