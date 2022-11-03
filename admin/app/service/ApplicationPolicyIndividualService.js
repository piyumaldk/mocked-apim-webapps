'use strict';


/**
 * Delete an Application Throttling policy
 * Deletes an application level throttling policy. 
 *
 * policyId String Thorttle policy UUID 
 * no response value expected for this operation
 **/
exports.throttlingPoliciesApplicationPolicyIdDELETE = function(policyId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an Application Throttling Policy
 * Retrieves an application throttling policy. 
 *
 * policyId String Thorttle policy UUID 
 * returns ApplicationThrottlePolicy
 **/
exports.throttlingPoliciesApplicationPolicyIdGET = function(policyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an Application Throttling policy
 * Updates an existing application level throttling policy. Upon a succesfull update, you will receive the updated application policy as the response. 
 *
 * body ApplicationThrottlePolicy Policy object that needs to be modified

 * policyId String Thorttle policy UUID 
 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns ApplicationThrottlePolicy
 **/
exports.throttlingPoliciesApplicationPolicyIdPUT = function(body,policyId,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

