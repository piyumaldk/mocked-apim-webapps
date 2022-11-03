'use strict';


/**
 * Get Role Scope Mappings 
 * This operation is used to get the list of role scope mapping from tenant-conf for the apim admin dashboard 
 *
 * returns ScopeList
 **/
exports.systemScopesGet = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 60,
  "list" : [ {
    "roles" : [ "admin", "Internal/publisher" ],
    "name" : "apim:api_publish",
    "description" : "Publish API",
    "tag" : "publisher"
  }, {
    "roles" : [ "admin", "Internal/publisher" ],
    "name" : "apim:api_publish",
    "description" : "Publish API",
    "tag" : "publisher"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Scopes for a Particular User
 * This operation will return the scope list of particular user In order to get it, we need to pass the userId as a query parameter 
 *
 * scopeName String Base64 URL encoded value of the scope name to be validated 
 * username String  (optional)
 * returns ScopeSettings
 **/
exports.systemScopesScopeNameGet = function(scopeName,username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "apim:subscribe"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Role Alias Mappings
 * This operation can be used to retreive role alias mapping 
 *
 * returns RoleAliasList
 **/
exports.system_scopesRole_aliasesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "role" : "Internal/subscriber",
    "aliases" : [ "Subscriber", "Internal/subscriber" ]
  }, {
    "role" : "Internal/subscriber",
    "aliases" : [ "Subscriber", "Internal/subscriber" ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a New Role Alias
 * This operation can be used to add a new role alias mapping for system scope roles 
 *
 * body RoleAliasList role-alias mapping
 * returns RoleAliasList
 **/
exports.system_scopesRole_aliasesPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "role" : "Internal/subscriber",
    "aliases" : [ "Subscriber", "Internal/subscriber" ]
  }, {
    "role" : "Internal/subscriber",
    "aliases" : [ "Subscriber", "Internal/subscriber" ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Roles For Scope 
 * This operation is used to update the roles for all scopes 
 *
 * body ScopeList Scope list object with updated scope to role mappings

 * returns ScopeList
 **/
exports.updateRolesForScope = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 60,
  "list" : [ {
    "roles" : [ "admin", "Internal/publisher" ],
    "name" : "apim:api_publish",
    "description" : "Publish API",
    "tag" : "publisher"
  }, {
    "roles" : [ "admin", "Internal/publisher" ],
    "name" : "apim:api_publish",
    "description" : "Publish API",
    "tag" : "publisher"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

