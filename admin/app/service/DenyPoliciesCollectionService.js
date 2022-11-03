'use strict';


/**
 * Get all Deny Policies
 * Retrieves all existing deny policies. 
 *
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * returns BlockingConditionList
 **/
exports.throttlingDeny_policiesGET = function(accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "conditionStatus" : true,
    "conditionId" : "b513eb68-69e8-4c32-92cf-852c101363cf",
    "conditionValue" : {
      "fixedIp" : "192.168.1.1",
      "invert" : false
    },
    "conditionType" : "IP"
  }, {
    "conditionStatus" : true,
    "conditionId" : "b513eb68-69e8-4c32-92cf-852c101363cf",
    "conditionValue" : {
      "fixedIp" : "192.168.1.1",
      "invert" : false
    },
    "conditionType" : "IP"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a deny policy
 * Adds a new deny policy 
 *
 * body BlockingCondition Blocking condition object that should to be added

 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns BlockingCondition
 **/
exports.throttlingDeny_policiesPOST = function(body,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "conditionStatus" : true,
  "conditionId" : "b513eb68-69e8-4c32-92cf-852c101363cf",
  "conditionValue" : {
    "fixedIp" : "192.168.1.1",
    "invert" : false
  },
  "conditionType" : "IP"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

