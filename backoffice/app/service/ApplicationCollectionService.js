'use strict';


/**
 * Retrieve/Search Applications 
 * This operation can be used to retrieve list of applications owned by the given user, If no user is provided, the applications owned by the user associated with the provided access token will be returned. 
 *
 * user String username of the application creator  (optional)
 * limit Integer Maximum size of resource array to return.  (optional)
 * offset Integer Starting point within the complete list of items qualified.  (optional)
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * name String Application Name  (optional)
 * tenantDomain String Tenant domain of the applications to get. This has to be specified only if it is required to get applications of a tenant other than the requester's tenant. So, if not specified, the default will be set as the requester's tenant domain. This cross tenant Application access is allowed only for super tenant admin users **only at a migration process**.  (optional)
 * sortBy String  (optional)
 * sortOrder String  (optional)
 * returns ApplicationList
 **/
exports.applicationsGET = function(user,limit,offset,accept,name,tenantDomain,sortBy,sortOrder) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "next" : "next",
    "total" : 10,
    "offset" : 0,
    "previous" : "previous",
    "limit" : 1
  },
  "count" : 1,
  "list" : [ {
    "owner" : "admin",
    "groupId" : "",
    "name" : "CalculatorApp",
    "applicationId" : "01234567-0123-0123-0123-012345678901",
    "status" : "APPROVED"
  }, {
    "owner" : "admin",
    "groupId" : "",
    "name" : "CalculatorApp",
    "applicationId" : "01234567-0123-0123-0123-012345678901",
    "status" : "APPROVED"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

