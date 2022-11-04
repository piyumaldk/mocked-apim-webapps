'use strict';


/**
 * Block a Subscription
 * This operation can be used to block a subscription. Along with the request, `blockState` must be specified as a query parameter.  1. `BLOCKED` : Subscription is completely blocked for both Production and Sandbox environments. 2. `PROD_ONLY_BLOCKED` : Subscription is blocked for Production environment only. 
 *
 * subscriptionId String Subscription Id 
 * blockState String Subscription block state. 
 * ifMatch String Validator for conditional requests; based on ETag.  (optional)
 * no response value expected for this operation
 **/
exports.blockSubscription = function(subscriptionId,blockState,ifMatch) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all Subscriptions
 * This operation can be used to retrieve a list of subscriptions of the user associated with the provided access token. This operation is capable of  1. Retrieving all subscriptions for the user's APIs. `GET https://127.0.0.1:9443/api/apk/backoffice/v1/subscriptions`  2. Retrieving subscriptions for a specific API. `GET https://127.0.0.1:9443/api/apk/backoffice/v1/subscriptions?apiId=c43a325c-260b-4302-81cb-768eafaa3aed` 
 *
 * apiId String **API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API I. Should be formatted as **provider-name-version**.  (optional)
 * limit Integer Maximum size of resource array to return.  (optional)
 * offset Integer Starting point within the complete list of items qualified.  (optional)
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * query String Keywords to filter subscriptions  (optional)
 * returns SubscriptionList
 **/
exports.getSubscriptions = function(apiId,limit,offset,ifNoneMatch,query) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "next" : "next",
    "total" : 10,
    "offset" : 0,
    "previous" : "previous",
    "limit" : 1
  },
  "count" : 1,
  "list" : [ {
    "usagePlan" : "Unlimited",
    "subscriptionStatus" : "BLOCKED",
    "subscriptionId" : "01234567-0123-0123-0123-012345678901",
    "applicationInfo" : {
      "subscriber" : "admin",
      "name" : "CalculatorApp",
      "subscriptionCount" : 0,
      "description" : "Sample calculator application",
      "applicationId" : "01234567-0123-0123-0123-012345678901"
    }
  }, {
    "usagePlan" : "Unlimited",
    "subscriptionStatus" : "BLOCKED",
    "subscriptionId" : "01234567-0123-0123-0123-012345678901",
    "applicationInfo" : {
      "subscriber" : "admin",
      "name" : "CalculatorApp",
      "subscriptionCount" : 0,
      "description" : "Sample calculator application",
      "applicationId" : "01234567-0123-0123-0123-012345678901"
    }
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
 * Unblock a Subscription
 * This operation can be used to unblock a subscription specifying the subscription Id. The subscription will be fully unblocked after performing this operation. 
 *
 * subscriptionId String Subscription Id 
 * ifMatch String Validator for conditional requests; based on ETag.  (optional)
 * no response value expected for this operation
 **/
exports.unBlockSubscription = function(subscriptionId,ifMatch) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

