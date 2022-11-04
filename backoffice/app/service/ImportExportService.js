'use strict';


/**
 * Export a Throttling Policy
 * This operation can be used to export the details of a particular Throttling Policy. 
 *
 * policyId String UUID of the ThrottlingPolicy (optional)
 * name String Throttling Policy Name  (optional)
 * type String Type of the Throttling Policy  (optional)
 * format String Format of output documents. Can be YAML or JSON.  (optional)
 * returns ExportThrottlePolicy
 **/
exports.exportThrottlingPolicy = function(policyId,name,type,format) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : { },
  "subtype" : "subtype",
  "type" : "type",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Import a Throttling Policy
 * This operation can be used to import a Throttling Policy 
 *
 * overwrite Boolean Update an existing throttlingpolicy with the same name  (optional)
 * no response value expected for this operation
 **/
exports.importThrottlingPolicy = function(overwrite) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

