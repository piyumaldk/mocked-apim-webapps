'use strict';

var utils = require('../utils/writer.js');
var KeyManagerIndividual = require('../service/KeyManagerIndividualService');

module.exports.key_managersKeyManagerIdDELETE = function key_managersKeyManagerIdDELETE (req, res, next, keyManagerId) {
  KeyManagerIndividual.key_managersKeyManagerIdDELETE(keyManagerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.key_managersKeyManagerIdGET = function key_managersKeyManagerIdGET (req, res, next, keyManagerId) {
  KeyManagerIndividual.key_managersKeyManagerIdGET(keyManagerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.key_managersKeyManagerIdPUT = function key_managersKeyManagerIdPUT (req, res, next, body, keyManagerId) {
  KeyManagerIndividual.key_managersKeyManagerIdPUT(body, keyManagerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
