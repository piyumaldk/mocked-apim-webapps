'use strict';


/**
 * Get all Application Throttling Policies
 * Retrieves all existing application throttling policies. 
 *
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * returns ApplicationThrottlePolicyList
 **/
exports.throttlingPoliciesApplicationGET = function(accept) {
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
 * Add an Application Throttling Policy
 * This operation can be used to add a new application level throttling policy. 
 *
 * body ApplicationThrottlePolicy Application level policy object that should to be added

 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns ApplicationThrottlePolicy
 **/
exports.throttlingPoliciesApplicationPOST = function(body,contentType) {
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

