'use strict';

var utils = require('../utils/writer.js');
var MonetizationCollection = require('../service/MonetizationCollectionService');

module.exports.monetizationPublish_usagePOST = function monetizationPublish_usagePOST (req, res, next) {
  MonetizationCollection.monetizationPublish_usagePOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.monetizationPublish_usageStatusGET = function monetizationPublish_usageStatusGET (req, res, next) {
  MonetizationCollection.monetizationPublish_usageStatusGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
