'use strict';

var utils = require('../utils/writer.js');
var APICategoryCollection = require('../service/APICategoryCollectionService');

module.exports.getAllAPICategories = function getAllAPICategories (req, res, next) {
  APICategoryCollection.getAllAPICategories()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
