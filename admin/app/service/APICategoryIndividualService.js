'use strict';


/**
 * Delete an API Category
 * Delete an API Category by API Category Id 
 *
 * apiCategoryId String API Category UUID 
 * no response value expected for this operation
 **/
exports.api_categoriesApiCategoryIdDELETE = function(apiCategoryId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an API Category
 * Update an API Category by category Id 
 *
 * body APICategory API Category object with updated information

 * apiCategoryId String API Category UUID 
 * returns APICategory
 **/
exports.api_categoriesApiCategoryIdPUT = function(body,apiCategoryId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "numberOfAPIs" : 1,
  "name" : "Finance",
  "description" : "Finance related APIs",
  "id" : "01234567-0123-0123-0123-012345678901"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add API Category
 * Add a new API category 
 *
 * body APICategory API Category object that should to be added

 * returns APICategory
 **/
exports.api_categoriesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "numberOfAPIs" : 1,
  "name" : "Finance",
  "description" : "Finance related APIs",
  "id" : "01234567-0123-0123-0123-012345678901"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

