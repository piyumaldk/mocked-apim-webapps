'use strict';

var utils = require('../utils/writer.js');
var UsagePlan = require('../service/UsagePlanService');

module.exports.getAllUsagePlans = function getAllUsagePlans (req, res, next, limit, offset, ifNoneMatch) {
  UsagePlan.getAllUsagePlans(limit, offset, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
