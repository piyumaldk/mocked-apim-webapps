'use strict';


/**
 * Get all Custom Rules
 * Retrieves all custom rules.  **NOTE:** * Only super tenant users are allowed for this operation. 
 *
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * returns CustomRuleList
 **/
exports.throttlingPoliciesCustomGET = function(accept) {
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
 * Add a Custom Rule
 * Adds a new custom rule.  **NOTE:** * Only super tenant users are allowed for this operation. 
 *
 * body CustomRule Custom Rule object that should to be added

 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns CustomRule
 **/
exports.throttlingPoliciesCustomPOST = function(body,contentType) {
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

