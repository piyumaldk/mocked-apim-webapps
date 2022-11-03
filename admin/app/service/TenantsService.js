'use strict';


/**
 * Get Custom URL Info of a Tenant Domain 
 * This operation is to get custom-url information of the provided tenant-domain 
 *
 * tenantDomain String The tenant domain name. 
 * returns CustomUrlInfo
 **/
exports.getCustomUrlInfoByTenantDomain = function(tenantDomain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "devPortal" : {
    "url" : "http://example.com"
  },
  "tenantAdminUsername" : "john@foo.com",
  "tenantDomain" : "carbon.super",
  "enabled" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Tenant Id of User 
 * This operation is to get tenant id of the provided user 
 *
 * username String The state represents the current state of the tenant. Supported states are [ active, inactive] 
 * returns TenantInfo
 **/
exports.getTenantInfoByUsername = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tenantId" : -1234,
  "tenantDomain" : "carbon.super",
  "username" : "john"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

