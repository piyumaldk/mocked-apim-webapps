'use strict';


/**
 * Get all Subscription Throttling Policies
 * This operation can be used to retrieve all Subscription level throttling policies. 
 *
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * returns SubscriptionThrottlePolicyList
 **/
exports.throttlingPoliciesSubscriptionGET = function(accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a Subscription Throttling Policy
 * This operation can be used to add a Subscription level throttling policy specifying the details of the policy in the payload. 
 *
 * body SubscriptionThrottlePolicy Subscripion level policy object that should to be added

 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns SubscriptionThrottlePolicy
 **/
exports.throttlingPoliciesSubscriptionPOST = function(body,contentType) {
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

