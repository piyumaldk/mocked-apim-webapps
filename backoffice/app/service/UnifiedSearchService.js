'use strict';


/**
 * Retrieve/Search APIs and API Documents by Content 
 * This operation provides you a list of available APIs and API Documents qualifying the given keyword match. 
 *
 * limit Integer Maximum size of resource array to return.  (optional)
 * offset Integer Starting point within the complete list of items qualified.  (optional)
 * query String **Search**.  You can search by proving a keyword.  (optional)
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns SearchResultList
 **/
exports.search = function(limit,offset,query,ifNoneMatch) {
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
  "list" : [ { }, { } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

