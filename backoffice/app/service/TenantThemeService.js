'use strict';


/**
 * Export a DevPortal Tenant Theme
 * This operation can be used to export a DevPortal tenant theme as a zip file. 
 *
 * returns byte[]
 **/
exports.exportTenantTheme = function() {
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
 * Import a DevPortal Tenant Theme
 * This operation can be used to import a DevPortal tenant theme. 
 *
 * no response value expected for this operation
 **/
exports.importTenantTheme = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

