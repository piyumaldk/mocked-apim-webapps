'use strict';


/**
 * Get Subscriptions for Bot Detection 
 * Get the list of subscriptions which are subscribed to receive email alerts for bot detection 
 *
 * returns BotDetectionAlertSubscriptionList
 **/
exports.getBotDetectionAlertSubscriptions = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 3,
  "list" : [ {
    "uuid" : "urn:uuid:1ed6d2de-29df-4fed-a96a-46d2329dce65",
    "email" : "abc@gmail.com"
  }, {
    "uuid" : "urn:uuid:1ed6d2de-29df-4fed-a96a-46d2329dce65",
    "email" : "abc@gmail.com"
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
 * Subscribe for Bot Detection Alerts
 * Register a subscription for bot detection alerts 
 *
 * body BotDetectionAlertSubscription The email to register to receive bot detection alerts

 * returns BotDetectionAlertSubscription
 **/
exports.subscribeForBotDetectionAlerts = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uuid" : "urn:uuid:1ed6d2de-29df-4fed-a96a-46d2329dce65",
  "email" : "abc@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unsubscribe from bot detection alerts.
 * Delete a Bot Detection Alert Subscription 
 *
 * uuid String uuid of the subscription
 * no response value expected for this operation
 **/
exports.unsubscribeFromBotDetectionAlerts = function(uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

