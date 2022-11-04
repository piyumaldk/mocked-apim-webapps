'use strict';

var utils = require('../utils/writer.js');
var WorkflowsIndividual = require('../service/WorkflowsIndividualService');

module.exports.workflowsExternalWorkflowRefGET = function workflowsExternalWorkflowRefGET (req, res, next, externalWorkflowRef) {
  WorkflowsIndividual.workflowsExternalWorkflowRefGET(externalWorkflowRef)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.workflowsUpdate_workflow_statusPOST = function workflowsUpdate_workflow_statusPOST (req, res, next, body, workflowReferenceId) {
  WorkflowsIndividual.workflowsUpdate_workflow_statusPOST(body, workflowReferenceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
