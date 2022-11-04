'use strict';


/**
 * Get Subscribed Alert Types 
 * This operation is used to get the list of subscribed alert types by the user. 
 *
 * returns AlertsSubscription
 **/
exports.getSubscribedAlertTypes = function() {
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
  "emailList" : [ "admin@wso2.com", "admin@wso2.com" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Subscribe to an Admin Alert 
 * This operation is used to subscribe to admin alerts 
 *
 * body AlertsSubscription The alerts list and the email list to subscribe.
 * returns AlertsSubscription
 **/
exports.subscribeToAlerts = function(body) {
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
  "emailList" : [ "admin@wso2.com", "admin@wso2.com" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unsubscribe User from all Admin Alerts 
 * This operation is used to unsubscribe the respective user from all the admin alert types. 
 *
 * no response value expected for this operation
 **/
exports.unsubscribeAllAlerts = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

