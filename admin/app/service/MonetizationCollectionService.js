'use strict';


/**
 * Publish Usage Records
 * Publish usage records of monetized APIs 
 *
 * returns PublishStatus
 **/
exports.monetizationPublish_usagePOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Records published successfully",
  "status" : "successfull"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the Status of Monetization Usage Publisher
 * Get the status of monetization usage publisher 
 *
 * returns MonetizationUsagePublishInfo
 **/
exports.monetizationPublish_usageStatusGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "startedTime" : "1599196134000",
  "lastPublsihedTime" : "1599196134000",
  "state" : "RUNNING",
  "status" : "SUCCESSFULL"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

