'use strict';


/**
 * Delete a Custom Rule
 * Delete a custom rule. We need to provide the Id of the policy as a path parameter.  **NOTE:** * Only super tenant users are allowed for this operation. 
 *
 * ruleId String Custom rule UUID 
 * no response value expected for this operation
 **/
exports.throttlingPoliciesCustomRuleIdDELETE = function(ruleId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Custom Rule
 * Retrieves a custom rule. We need to provide the policy Id as a path parameter.  **NOTE:** * Only super tenant users are allowed for this operation. 
 *
 * ruleId String Custom rule UUID 
 * returns CustomRule
 **/
exports.throttlingPoliciesCustomRuleIdGET = function(ruleId) {
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
 * Update a Custom Rule
 * Updates an existing custom rule.  **NOTE:** * Only super tenant users are allowed for this operation. 
 *
 * body CustomRule Policy object that needs to be modified

 * ruleId String Custom rule UUID 
 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns CustomRule
 **/
exports.throttlingPoliciesCustomRuleIdPUT = function(body,ruleId,contentType) {
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

