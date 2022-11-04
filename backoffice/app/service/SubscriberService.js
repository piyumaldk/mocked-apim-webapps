'use strict';


/**
 * Get Details of a Subscriber
 * This operation can be used to get details of a user who subscribed to the API. 
 *
 * subscriptionId String Subscription Id 
 * returns SubscriberInfo
 **/
exports.getSubscriberInfoBySubscriptionId = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "admin"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

