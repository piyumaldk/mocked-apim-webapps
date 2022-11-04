'use strict';


/**
 * Get all Advanced Throttling Policies
 * Retrieves all existing advanced throttling policies. 
 *
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * returns AdvancedThrottlePolicyList
 **/
exports.throttlingPoliciesAdvancedGET = function(accept) {
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
 * Add an Advanced Throttling Policy
 * Add a new advanced throttling policy. 
 *
 * body AdvancedThrottlePolicy Advanced level policy object that should to be added

 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns AdvancedThrottlePolicy
 **/
exports.throttlingPoliciesAdvancedPOST = function(body,contentType) {
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

