'use strict';


/**
 * Get Pending Workflow Details by External Workflow Reference 
 * Using this operation, you can retrieve complete details of a pending workflow request that either belongs to application creation, application subscription, application registration, api state change, user self sign up.. You need to provide the External_Workflow_Reference of the workflow Request to retrive it. 
 *
 * externalWorkflowRef String from the externel workflow reference we decide what is the the pending request that the are requesting. 
 * returns WorkflowInfo
 **/
exports.workflowsExternalWorkflowRefGET = function(externalWorkflowRef) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "updatedTime" : "2020-02-10T10:10:19.704Z",
  "workflowStatus" : "APPROVED",
  "createdTime" : "2020-02-10T10:10:19.704Z",
  "description" : "Approve application [APP1] creation request from application creator - admin with throttling tier - 10MinPer",
  "workflowType" : "APPLICATION_CREATION",
  "referenceId" : "5871244b-d6f3-466e-8995-8accd1e64303",
  "properties" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Workflow Status
 * This operation can be used to approve or reject a workflow task. 
 *
 * body Workflow Workflow event that need to be updated

 * workflowReferenceId String Workflow reference id 
 * returns Workflow
 **/
exports.workflowsUpdate_workflow_statusPOST = function(body,workflowReferenceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "Approve workflow request.",
  "attributes" : { },
  "status" : "APPROVED"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

