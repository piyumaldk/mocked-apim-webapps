'use strict';


/**
 * Delete an Environment
 * Delete a Environment by Environment Id 
 *
 * environmentId String Environment UUID (or Environment name defined in config) 
 * no response value expected for this operation
 **/
exports.environmentsEnvironmentIdDELETE = function(environmentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an Environment
 * Update a gateway Environment by environment Id 
 *
 * body Environment Environment object with updated information

 * environmentId String Environment UUID (or Environment name defined in config) 
 * returns Environment
 **/
exports.environmentsEnvironmentIdPUT = function(body,environmentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "endpointURIs" : [ {
    "protocol" : "default",
    "endpointURI" : "default"
  }, {
    "protocol" : "default",
    "endpointURI" : "default"
  } ],
  "isReadOnly" : false,
  "provider" : "wso2",
  "displayName" : "US Region",
  "name" : "us-region",
  "description" : "Gateway environment in US Region",
  "id" : "ece92bdc-e1e6-325c-b6f4-656208a041e9",
  "additionalProperties" : [ {
    "value" : "wso2",
    "key" : "Organization"
  }, {
    "value" : "wso2",
    "key" : "Organization"
  } ],
  "vhosts" : [ {
    "httpContext" : "pets",
    "wssPort" : 8099,
    "httpPort" : 80,
    "wsPort" : 9099,
    "host" : "mg.wso2.com",
    "httpsPort" : 443
  }, {
    "httpContext" : "pets",
    "wssPort" : 8099,
    "httpPort" : 80,
    "wsPort" : 9099,
    "host" : "mg.wso2.com",
    "httpsPort" : 443
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
 * Get all registered Environments
 * Get all Registered Environments 
 *
 * returns EnvironmentList
 **/
exports.environmentsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "endpointURIs" : [ {
      "protocol" : "default",
      "endpointURI" : "default"
    }, {
      "protocol" : "default",
      "endpointURI" : "default"
    } ],
    "isReadOnly" : false,
    "provider" : "wso2",
    "displayName" : "US Region",
    "name" : "us-region",
    "description" : "Gateway environment in US Region",
    "id" : "ece92bdc-e1e6-325c-b6f4-656208a041e9",
    "additionalProperties" : [ {
      "value" : "wso2",
      "key" : "Organization"
    }, {
      "value" : "wso2",
      "key" : "Organization"
    } ],
    "vhosts" : [ {
      "httpContext" : "pets",
      "wssPort" : 8099,
      "httpPort" : 80,
      "wsPort" : 9099,
      "host" : "mg.wso2.com",
      "httpsPort" : 443
    }, {
      "httpContext" : "pets",
      "wssPort" : 8099,
      "httpPort" : 80,
      "wsPort" : 9099,
      "host" : "mg.wso2.com",
      "httpsPort" : 443
    } ]
  }, {
    "endpointURIs" : [ {
      "protocol" : "default",
      "endpointURI" : "default"
    }, {
      "protocol" : "default",
      "endpointURI" : "default"
    } ],
    "isReadOnly" : false,
    "provider" : "wso2",
    "displayName" : "US Region",
    "name" : "us-region",
    "description" : "Gateway environment in US Region",
    "id" : "ece92bdc-e1e6-325c-b6f4-656208a041e9",
    "additionalProperties" : [ {
      "value" : "wso2",
      "key" : "Organization"
    }, {
      "value" : "wso2",
      "key" : "Organization"
    } ],
    "vhosts" : [ {
      "httpContext" : "pets",
      "wssPort" : 8099,
      "httpPort" : 80,
      "wsPort" : 9099,
      "host" : "mg.wso2.com",
      "httpsPort" : 443
    }, {
      "httpContext" : "pets",
      "wssPort" : 8099,
      "httpPort" : 80,
      "wsPort" : 9099,
      "host" : "mg.wso2.com",
      "httpsPort" : 443
    } ]
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
 * Add an Environment
 * Add a new gateway environment 
 *
 * body Environment Environment object that should to be added

 * returns Environment
 **/
exports.environmentsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "endpointURIs" : [ {
    "protocol" : "default",
    "endpointURI" : "default"
  }, {
    "protocol" : "default",
    "endpointURI" : "default"
  } ],
  "isReadOnly" : false,
  "provider" : "wso2",
  "displayName" : "US Region",
  "name" : "us-region",
  "description" : "Gateway environment in US Region",
  "id" : "ece92bdc-e1e6-325c-b6f4-656208a041e9",
  "additionalProperties" : [ {
    "value" : "wso2",
    "key" : "Organization"
  }, {
    "value" : "wso2",
    "key" : "Organization"
  } ],
  "vhosts" : [ {
    "httpContext" : "pets",
    "wssPort" : 8099,
    "httpPort" : 80,
    "wsPort" : 9099,
    "host" : "mg.wso2.com",
    "httpsPort" : 443
  }, {
    "httpContext" : "pets",
    "wssPort" : 8099,
    "httpPort" : 80,
    "wsPort" : 9099,
    "host" : "mg.wso2.com",
    "httpsPort" : 443
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

