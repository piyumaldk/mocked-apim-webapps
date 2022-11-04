'use strict';

var utils = require('../utils/writer.js');
var APILifecycle = require('../service/APILifecycleService');

module.exports.changeAPILifecycle = function changeAPILifecycle (req, res, next, runtimeId, action, apiId, ifMatch) {
  APILifecycle.changeAPILifecycle(runtimeId, action, apiId, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAPILifecycleStatePendingTasks = function deleteAPILifecycleStatePendingTasks (req, res, next, runtimeId, apiId) {
  APILifecycle.deleteAPILifecycleStatePendingTasks(runtimeId, apiId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPILifecycleHistory = function getAPILifecycleHistory (req, res, next, runtimeId, apiId, ifNoneMatch) {
  APILifecycle.getAPILifecycleHistory(runtimeId, apiId, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPILifecycleState = function getAPILifecycleState (req, res, next, runtimeId, apiId, ifNoneMatch) {
  APILifecycle.getAPILifecycleState(runtimeId, apiId, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
