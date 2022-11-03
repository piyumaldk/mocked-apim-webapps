'use strict';


/**
 * Export a tenant-Config.
 * This operation can be used to export a tenant-config.json used in deployment. 
 *
 * returns String
 **/
exports.exportTenantConfig = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a tenant-config.
 * This operation can be used to update tenant-config. 
 *
 * body String tenant-config
 * returns Object
 **/
exports.updateTenantConfig = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

