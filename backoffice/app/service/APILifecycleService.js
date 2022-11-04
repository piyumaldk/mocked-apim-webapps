'use strict';


/**
 * Change API LC Status
 * This operation is used to change the lifecycle of an API. Eg: Publish an API which is in `CREATED` state. In order to change the lifecycle, we need to provide the lifecycle `action` as a query parameter.  For example, to Publish an API, `action` should be `Publish`. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * action String The action to demote or promote the state of the API.  Supported actions are [ **Publish**, **Demote to Created**] 
 * apiId String **API ID** consisting of the **UUID** of the API. The combination of the provider of the API, name of the API and the version is also accepted as a valid API I. Should be formatted as **provider-name-version**. 
 * ifMatch String Validator for conditional requests; based on ETag.  (optional)
 * returns WorkflowResponse
 **/
exports.changeAPILifecycle = function(runtimeId,action,apiId,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lifecycleState" : {
    "state" : "Created",
    "availableTransitions" : [ {
      "targetState" : "Published",
      "event" : "Publish"
    }, {
      "targetState" : "Published",
      "event" : "Publish"
    } ]
  },
  "workflowStatus" : "APPROVED",
  "jsonPayload" : "jsonPayload"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Pending Lifecycle State Change Tasks
 * This operation can be used to remove pending lifecycle state change requests that are in pending state 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * no response value expected for this operation
 **/
exports.deleteAPILifecycleStatePendingTasks = function(runtimeId,apiId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Lifecycle State Change History of the APIs.
 * This operation can be used to retrieve Lifecycle state change history of the APIs. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns LifecycleHistory
 **/
exports.getAPILifecycleHistory = function(runtimeId,apiId,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "updatedTime" : "2019-03-04T00:00:00.000Z",
    "postState" : "Published",
    "user" : "admin",
    "previousState" : "Created"
  }, {
    "updatedTime" : "2019-03-04T00:00:00.000Z",
    "postState" : "Published",
    "user" : "admin",
    "previousState" : "Created"
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
 * Get Lifecycle State Data of the API.
 * This operation can be used to retrieve Lifecycle state data of the API. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns LifecycleState
 **/
exports.getAPILifecycleState = function(runtimeId,apiId,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "state" : "Created",
  "availableTransitions" : [ {
    "targetState" : "Published",
    "event" : "Publish"
  }, {
    "targetState" : "Published",
    "event" : "Publish"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

