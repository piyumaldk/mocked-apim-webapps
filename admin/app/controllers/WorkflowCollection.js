'use strict';

var utils = require('../utils/writer.js');
var WorkflowCollection = require('../service/WorkflowCollectionService');

module.exports.workflowsGET = function workflowsGET (req, res, next, limit, offset, accept, workflowType) {
  WorkflowCollection.workflowsGET(limit, offset, accept, workflowType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
