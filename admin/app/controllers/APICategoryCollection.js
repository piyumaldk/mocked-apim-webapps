'use strict';

var utils = require('../utils/writer.js');
var APICategoryCollection = require('../service/APICategoryCollectionService');

module.exports.api_categoriesGET = function api_categoriesGET (req, res, next) {
  APICategoryCollection.api_categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
