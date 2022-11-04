'use strict';

var utils = require('../utils/writer.js');
var APIs = require('../service/APIsService');

module.exports.getAPI = function getAPI (req, res, next, runtimeId, apiId, ifNoneMatch) {
  APIs.getAPI(runtimeId, apiId, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPIDefinition = function getAPIDefinition (req, res, next, runtimeId, apiId, ifNoneMatch) {
  APIs.getAPIDefinition(runtimeId, apiId, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPIResourcePaths = function getAPIResourcePaths (req, res, next, runtimeId, apiId, limit, offset, ifNoneMatch) {
  APIs.getAPIResourcePaths(runtimeId, apiId, limit, offset, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPIThumbnail = function getAPIThumbnail (req, res, next, runtimeId, apiId, accept, ifNoneMatch) {
  APIs.getAPIThumbnail(runtimeId, apiId, accept, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllAPIs = function getAllAPIs (req, res, next, runtimeId, limit, offset, sortBy, sortOrder, query, ifNoneMatch, accept) {
  APIs.getAllAPIs(runtimeId, limit, offset, sortBy, sortOrder, query, ifNoneMatch, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllRuntimes = function getAllRuntimes (req, res, next, limit, offset, accept) {
  APIs.getAllRuntimes(limit, offset, accept)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRuntime = function getRuntime (req, res, next, runtimeId, ifNoneMatch) {
  APIs.getRuntime(runtimeId, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAPI = function updateAPI (req, res, next, body, runtimeId, apiId, ifNoneMatch) {
  APIs.updateAPI(body, runtimeId, apiId, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAPIThumbnail = function updateAPIThumbnail (req, res, next, runtimeId, apiId, ifMatch) {
  APIs.updateAPIThumbnail(runtimeId, apiId, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
