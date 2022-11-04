'use strict';


/**
 * Get All Useage Plans
 * This operation can be used to list the available usage plans.  
 *
 * limit Integer Maximum size of resource array to return.  (optional)
 * offset Integer Starting point within the complete list of items qualified.  (optional)
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns UsagePlanList
 **/
exports.getAllUsagePlans = function(limit,offset,ifNoneMatch) {
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
  "list" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

