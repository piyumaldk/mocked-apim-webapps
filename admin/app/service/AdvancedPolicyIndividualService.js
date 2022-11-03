'use strict';


/**
 * Delete an Advanced Throttling Policy
 * Deletes an advanced throttling policy. 
 *
 * policyId String Thorttle policy UUID 
 * no response value expected for this operation
 **/
exports.throttlingPoliciesAdvancedPolicyIdDELETE = function(policyId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an Advanced Throttling Policy
 * Retrieves an advanced throttling policy. 
 *
 * policyId String Thorttle policy UUID 
 * returns AdvancedThrottlePolicy
 **/
exports.throttlingPoliciesAdvancedPolicyIdGET = function(policyId) {
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
 * Update an Advanced Throttling Policy
 * Updates an existing Advanced throttling policy. 
 *
 * body AdvancedThrottlePolicy Policy object that needs to be modified

 * policyId String Thorttle policy UUID 
 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns AdvancedThrottlePolicy
 **/
exports.throttlingPoliciesAdvancedPolicyIdPUT = function(body,policyId,contentType) {
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

