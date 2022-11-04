'use strict';


/**
 * Get all Admin Alert Types 
 * This operation is used to get the list of supportd alert types for the apim admin dashboard 
 *
 * returns AlertTypesList
 **/
exports.getAdminAlertTypes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "alerts" : [ {
    "name" : "AbnormalResponseTime",
    "id" : "1"
  }, {
    "name" : "AbnormalResponseTime",
    "id" : "1"
  } ],
  "count" : 3
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

