'use strict';

var utils = require('../utils/writer.js');
var Application = require('../service/ApplicationService');

module.exports.applicationsApplicationIdChange_ownerPOST = function applicationsApplicationIdChange_ownerPOST (req, res, next, owner, applicationId) {
  Application.applicationsApplicationIdChange_ownerPOST(owner, applicationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
