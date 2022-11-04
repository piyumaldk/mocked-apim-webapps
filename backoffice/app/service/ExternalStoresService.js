'use strict';


/**
 * Retrieve External Stores List to Publish an API
 * Retrieve external stores list configured to publish an API 
 *
 * returns ExternalStore
 **/
exports.getAllExternalStores = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "endpoint" : "http://localhost:9764/store",
  "displayName" : "UKStore",
  "id" : "Store123#",
  "type" : "wso2"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the List of External Stores to which an API is Published
 * This operation can be used to retrieve a list of external stores which an API is published to by providing the ID of the API. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns APIExternalStoreList
 **/
exports.getAllPublishedExternalStoresByAPI = function(runtimeId,apiId,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "lastUpdatedTime" : "2019-09-09T13:57:16.229Z",
    "id" : "Store123#"
  }, {
    "lastUpdatedTime" : "2019-09-09T13:57:16.229Z",
    "id" : "Store123#"
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
 * Publish an API to External Stores
 * This operation can be used to publish an API to a list of external stores. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * externalStoreIds String External Store Ids of stores which the API needs to be published or updated. (optional)
 * ifMatch String Validator for conditional requests; based on ETag.  (optional)
 * returns APIExternalStoreList
 **/
exports.publishAPIToExternalStores = function(runtimeId,apiId,externalStoreIds,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "lastUpdatedTime" : "2019-09-09T13:57:16.229Z",
    "id" : "Store123#"
  }, {
    "lastUpdatedTime" : "2019-09-09T13:57:16.229Z",
    "id" : "Store123#"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

