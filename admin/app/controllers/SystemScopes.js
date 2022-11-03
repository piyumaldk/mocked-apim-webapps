'use strict';

var utils = require('../utils/writer.js');
var SystemScopes = require('../service/SystemScopesService');

module.exports.systemScopesGet = function systemScopesGet (req, res, next) {
  SystemScopes.systemScopesGet()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.systemScopesScopeNameGet = function systemScopesScopeNameGet (req, res, next, scopeName, username) {
  SystemScopes.systemScopesScopeNameGet(scopeName, username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.system_scopesRole_aliasesGET = function system_scopesRole_aliasesGET (req, res, next) {
  SystemScopes.system_scopesRole_aliasesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.system_scopesRole_aliasesPUT = function system_scopesRole_aliasesPUT (req, res, next, body) {
  SystemScopes.system_scopesRole_aliasesPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateRolesForScope = function updateRolesForScope (req, res, next, body) {
  SystemScopes.updateRolesForScope(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
