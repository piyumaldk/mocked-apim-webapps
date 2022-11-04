'use strict';

var utils = require('../utils/writer.js');
var KeyManagerCollection = require('../service/KeyManagerCollectionService');

module.exports.key_managersDiscoverPOST = function key_managersDiscoverPOST (req, res, next) {
  KeyManagerCollection.key_managersDiscoverPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.key_managersGET = function key_managersGET (req, res, next) {
  KeyManagerCollection.key_managersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.key_managersPOST = function key_managersPOST (req, res, next, body) {
  KeyManagerCollection.key_managersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
