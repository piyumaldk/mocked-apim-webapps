'use strict';


/**
 * Delete a Deny Policy
 * Deletes an existing deny policy 
 *
 * conditionId String Blocking condition identifier 
 * no response value expected for this operation
 **/
exports.throttlingDeny_policyConditionIdDELETE = function(conditionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Deny Policy
 * Retrieves a Deny policy providing the condition Id 
 *
 * conditionId String Blocking condition identifier 
 * returns BlockingCondition
 **/
exports.throttlingDeny_policyConditionIdGET = function(conditionId) {
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


/**
 * Update a Deny Policy
 * Update a deny policy by Id 
 *
 * body BlockingConditionStatus Blocking condition with updated status

 * conditionId String Blocking condition identifier 
 * contentType String Media type of the entity in the body. Default is application/json. 
 * returns BlockingCondition
 **/
exports.throttlingDeny_policyConditionIdPATCH = function(body,conditionId,contentType) {
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

