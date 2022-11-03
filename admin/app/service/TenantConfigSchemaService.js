'use strict';


/**
 * Export a tenant-Config-Schema.
 * This operation can be used to export a tenant-config-schema.json used in deployment. 
 *
 * returns String
 **/
exports.exportTenantConfigSchema = function() {
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

