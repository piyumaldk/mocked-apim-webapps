'use strict';

var utils = require('../utils/writer.js');
var Settings = require('../service/SettingsService');

module.exports.getSettings = function getSettings (req, res, next) {
  Settings.getSettings()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
