'use strict';


/**
 * Configure Monetization for a Given API
 * This operation can be used to configure monetization for a given API. 
 *
 * body APIMonetizationInfo Monetization data object
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * no response value expected for this operation
 **/
exports.addAPIMonetization = function(body,runtimeId,apiId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Monetization Status for each Tier in a Given API
 * This operation can be used to get monetization status for each tier in a given API 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * no response value expected for this operation
 **/
exports.getAPIMonetization = function(runtimeId,apiId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Total Revenue Details of a Given Monetized API with Meterd Billing
 * This operation can be used to get details of total revenue details of a given monetized API with meterd billing. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * returns APIRevenue
 **/
exports.getAPIRevenue = function(runtimeId,apiId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "properties" : {
    "key" : "properties"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Details of a Pending Invoice for a Monetized Subscription with Metered Billing.
 * This operation can be used to get details of a pending invoice for a monetized subscription with meterd billing. 
 *
 * subscriptionId String Subscription Id 
 * returns APIMonetizationUsage
 **/
exports.getSubscriptionUsage = function(subscriptionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "properties" : {
    "key" : "properties"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

