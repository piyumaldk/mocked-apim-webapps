'use strict';


/**
 * Delete a Subscription Policy
 * This operation can be used to delete a subscription level throttling policy by specifying the Id of the policy as a path paramter. 
 *
 * policyId String Thorttle policy UUID 
 * no response value expected for this operation
 **/
exports.throttlingPoliciesSubscriptionPolicyIdDELETE = function(policyId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Subscription Policy
 * This operation can be used to retrieves subscription level throttling policy by specifying the Id of the policy as a path paramter 
 *
 * policyId String Thorttle policy UUID 
 * returns SubscriptionThrottlePolicy
 **/
exports.throttlingPoliciesSubscriptionPolicyIdGET = function(policyId) {
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
 * Update a Subscription Policy
 * Updates an existing subscription level throttling policy. 
 *
 * body SubscriptionThrottlePolicy Policy object that needs to be modified

 * policyId String Thorttle policy UUID 
 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns SubscriptionThrottlePolicy
 **/
exports.throttlingPoliciesSubscriptionPolicyIdPUT = function(body,policyId,contentType) {
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

