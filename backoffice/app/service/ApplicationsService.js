'use strict';


/**
 * Delete an Application 
 * This operation can be used to delete an application by specifying its id. 
 *
 * applicationId String Application UUID 
 * no response value expected for this operation
 **/
exports.applicationsApplicationIdDELETE = function(applicationId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the details of an Application 
 * This operation can be used to get the details of an application by specifying its id. 
 *
 * applicationId String Application UUID 
 * returns Application
 **/
exports.applicationsApplicationIdGET = function(applicationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "admin",
  "subscriptionScopes" : [ {
    "roles" : [ "manager", "developer" ],
    "name" : "admin scope",
    "description" : "description",
    "key" : "admin_scope"
  }, {
    "roles" : [ "manager", "developer" ],
    "name" : "admin scope",
    "description" : "description",
    "key" : "admin_scope"
  } ],
  "name" : "CalculatorApp",
  "subscriptionCount" : 0,
  "description" : "Sample calculator application",
  "groups" : "",
  "attributes" : "External Reference ID, Billing Tier",
  "throttlingPolicy" : "Unlimited",
  "applicationId" : "01234567-0123-0123-0123-012345678901",
  "tokenType" : "JWT",
  "status" : "APPROVED"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

