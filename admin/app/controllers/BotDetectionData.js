'use strict';

var utils = require('../utils/writer.js');
var BotDetectionData = require('../service/BotDetectionDataService');

module.exports.getBotDetectionData = function getBotDetectionData (req, res, next) {
  BotDetectionData.getBotDetectionData()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
