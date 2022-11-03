'use strict';


/**
 * Change Application Owner
 * This operation is used to change the owner of an Application. In order to change the owner of an application, we need to pass the new application owner as a query parameter 
 *
 * owner String 
 * applicationId String Application UUID 
 * no response value expected for this operation
 **/
exports.applicationsApplicationIdChange_ownerPOST = function(owner,applicationId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

