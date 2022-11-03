'use strict';


/**
 * Check Whether Given Role Name already Exist
 * Using this operation, user can check a given role name exists or not. 
 *
 * roleId String The Base 64 URL encoded role name with domain. If the given role is in PRIMARY user-store, role ID should be derived as Base64URLEncode(role-name). If the given role is in secondary user-store, role ID should be derived as Base64URLEncode({user-store-name}/{role-name}). 
 * no response value expected for this operation
 **/
exports.validateSystemRole = function(roleId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

