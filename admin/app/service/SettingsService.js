'use strict';


/**
 * Retreive Admin Settings
 * Retreive admin settings 
 *
 * returns Settings
 **/
exports.settingsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "analyticsEnabled" : false,
  "keyManagerConfiguration" : [ {
    "defaultConsumerKeyClaim" : "azp",
    "endpointConfigurations" : [ null, null ],
    "displayName" : "default",
    "configurations" : [ {
      "default" : "admin",
      "values" : [ { }, { } ],
      "name" : "consumer_key",
      "multiple" : true,
      "tooltip" : "Enter username to connect to key manager",
      "label" : "Consumer Key",
      "type" : "select",
      "required" : true,
      "mask" : true
    }, {
      "default" : "admin",
      "values" : [ { }, { } ],
      "name" : "consumer_key",
      "multiple" : true,
      "tooltip" : "Enter username to connect to key manager",
      "label" : "Consumer Key",
      "type" : "select",
      "required" : true,
      "mask" : true
    } ],
    "defaultScopesClaim" : "scope",
    "type" : "default"
  }, {
    "defaultConsumerKeyClaim" : "azp",
    "endpointConfigurations" : [ null, null ],
    "displayName" : "default",
    "configurations" : [ {
      "default" : "admin",
      "values" : [ { }, { } ],
      "name" : "consumer_key",
      "multiple" : true,
      "tooltip" : "Enter username to connect to key manager",
      "label" : "Consumer Key",
      "type" : "select",
      "required" : true,
      "mask" : true
    }, {
      "default" : "admin",
      "values" : [ { }, { } ],
      "name" : "consumer_key",
      "multiple" : true,
      "tooltip" : "Enter username to connect to key manager",
      "label" : "Consumer Key",
      "type" : "select",
      "required" : true,
      "mask" : true
    } ],
    "defaultScopesClaim" : "scope",
    "type" : "default"
  } ],
  "scopes" : [ "scopes", "scopes" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

