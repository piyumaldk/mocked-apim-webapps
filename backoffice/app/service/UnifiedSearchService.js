'use strict';


/**
 * Retrieve/Search Throttling Policies 
 * This operation provides you a list of available Throttling Policies qualifying the given keyword match. 
 *
 * query String **Search**. You can search by providing a keyword. Allowed to search by type and name only.  (optional)
 * returns ThrottlePolicyDetailsList
 **/
exports.throttlingPolicySearch = function(query) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "policyId" : 3,
    "policyName" : "30PerMin",
    "displayName" : "30PerMin",
    "isDeployed" : false,
    "description" : "Allows 30 request per minute",
    "type" : "type",
    "uuid" : "0c6439fd-9b16-3c2e-be6e-1086e0b9aa93"
  }, {
    "policyId" : 3,
    "policyName" : "30PerMin",
    "displayName" : "30PerMin",
    "isDeployed" : false,
    "description" : "Allows 30 request per minute",
    "type" : "type",
    "uuid" : "0c6439fd-9b16-3c2e-be6e-1086e0b9aa93"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

