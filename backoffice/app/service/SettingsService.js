'use strict';


/**
 * Retreive BackOffice Settings
 * Retreive BackOffice settings 
 *
 * returns Settings
 **/
exports.getSettings = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "devportalUrl" : "https://localhost:9443/devportal",
  "environment" : [ {
    "endpointURIs" : [ {
      "protocol" : "default",
      "endpointURI" : "default"
    }, {
      "protocol" : "default",
      "endpointURI" : "default"
    } ],
    "provider" : "wso2",
    "showInApiConsole" : true,
    "displayName" : "Default",
    "serverUrl" : "https://localhost:9443/services/",
    "name" : "default",
    "id" : "id",
    "additionalProperties" : [ {
      "value" : "wso2",
      "key" : "Organization"
    }, {
      "value" : "wso2",
      "key" : "Organization"
    } ],
    "type" : "hybrid"
  }, {
    "endpointURIs" : [ {
      "protocol" : "default",
      "endpointURI" : "default"
    }, {
      "protocol" : "default",
      "endpointURI" : "default"
    } ],
    "provider" : "wso2",
    "showInApiConsole" : true,
    "displayName" : "Default",
    "serverUrl" : "https://localhost:9443/services/",
    "name" : "default",
    "id" : "id",
    "additionalProperties" : [ {
      "value" : "wso2",
      "key" : "Organization"
    }, {
      "value" : "wso2",
      "key" : "Organization"
    } ],
    "type" : "hybrid"
  } ],
  "scopes" : [ "apim:api_create", "apim:api_manage", "apim:api_publish" ],
  "monetizationAttributes" : [ ],
  "authorizationHeader" : "authorization",
  "docVisibilityEnabled" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

