'use strict';

var utils = require('../utils/writer.js');
var APICategoryIndividual = require('../service/APICategoryIndividualService');

module.exports.api_categoriesApiCategoryIdDELETE = function api_categoriesApiCategoryIdDELETE (req, res, next, apiCategoryId) {
  APICategoryIndividual.api_categoriesApiCategoryIdDELETE(apiCategoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.api_categoriesApiCategoryIdPUT = function api_categoriesApiCategoryIdPUT (req, res, next, body, apiCategoryId) {
  APICategoryIndividual.api_categoriesApiCategoryIdPUT(body, apiCategoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.api_categoriesPOST = function api_categoriesPOST (req, res, next, body) {
  APICategoryIndividual.api_categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
