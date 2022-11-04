'use strict';

var utils = require('../utils/writer.js');
var ExternalStores = require('../service/ExternalStoresService');

module.exports.getAllExternalStores = function getAllExternalStores (req, res, next) {
  ExternalStores.getAllExternalStores()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllPublishedExternalStoresByAPI = function getAllPublishedExternalStoresByAPI (req, res, next, runtimeId, apiId, ifNoneMatch) {
  ExternalStores.getAllPublishedExternalStoresByAPI(runtimeId, apiId, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.publishAPIToExternalStores = function publishAPIToExternalStores (req, res, next, runtimeId, apiId, externalStoreIds, ifMatch) {
  ExternalStores.publishAPIToExternalStores(runtimeId, apiId, externalStoreIds, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
