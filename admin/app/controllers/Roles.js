'use strict';

var utils = require('../utils/writer.js');
var Roles = require('../service/RolesService');

module.exports.validateSystemRole = function validateSystemRole (req, res, next, roleId) {
  Roles.validateSystemRole(roleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
