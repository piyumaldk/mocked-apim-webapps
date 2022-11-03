'use strict';


/**
 * Get all API Categories
 * Get all API categories 
 *
 * returns APICategoryList
 **/
exports.api_categoriesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "numberOfAPIs" : 1,
    "name" : "Finance",
    "description" : "Finance related APIs",
    "id" : "01234567-0123-0123-0123-012345678901"
  }, {
    "numberOfAPIs" : 1,
    "name" : "Finance",
    "description" : "Finance related APIs",
    "id" : "01234567-0123-0123-0123-012345678901"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

