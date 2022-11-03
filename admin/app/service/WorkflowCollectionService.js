'use strict';


/**
 * Retrieve All Pending Workflow Processes 
 * This operation can be used to retrieve list of workflow pending processes. 
 *
 * limit Integer Maximum size of resource array to return.  (optional)
 * offset Integer Starting point within the complete list of items qualified.  (optional)
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * workflowType String We need to show the values of each workflow process separately .for that we use workflow type. Workflow type can be AM_APPLICATION_CREATION, AM_SUBSCRIPTION_CREATION,   AM_USER_SIGNUP, AM_APPLICATION_REGISTRATION_PRODUCTION, AM_APPLICATION_REGISTRATION_SANDBOX.  (optional)
 * returns WorkflowList
 **/
exports.workflowsGET = function(limit,offset,accept,workflowType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "/workflows?limit=1&offset=2&user=",
  "previous" : "/workflows?limit=1&offset=0&user=",
  "count" : 1,
  "list" : [ {
    "updatedTime" : "2020-02-10T10:10:19.704Z",
    "workflowStatus" : "APPROVED",
    "createdTime" : "2020-02-10T10:10:19.704Z",
    "description" : "Approve application [APP1] creation request from application creator - admin with throttling tier - 10MinPer",
    "workflowType" : "APPLICATION_CREATION",
    "referenceId" : "5871244b-d6f3-466e-8995-8accd1e64303",
    "properties" : { }
  }, {
    "updatedTime" : "2020-02-10T10:10:19.704Z",
    "workflowStatus" : "APPROVED",
    "createdTime" : "2020-02-10T10:10:19.704Z",
    "description" : "Approve application [APP1] creation request from application creator - admin with throttling tier - 10MinPer",
    "workflowType" : "APPLICATION_CREATION",
    "referenceId" : "5871244b-d6f3-466e-8995-8accd1e64303",
    "properties" : { }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

