'use strict';


/**
 * Retrieve Well-known information from Key Manager Well-known Endpoint
 * Retrieve well-known information from key manager's well-known endpoint 
 *
 * returns KeyManagerWellKnownResponse
 **/
exports.key_managersDiscoverPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "valid" : true,
  "value" : {
    "clientRegistrationEndpoint" : "https://localhost:9444/keymanager-operations/dcr/register",
    "displayName" : "WSO2 Identity Server",
    "enableMapOAuthConsumerApps" : false,
    "introspectionEndpoint" : "https://localhost:9444/oauth2/introspect",
    "scopeManagementEndpoint" : "https://wso2is.com:9444/api/identity/oauth2/v1.0/scopes",
    "description" : "This is a key manager for Developers",
    "type" : "WSO2-IS",
    "issuer" : "https://localhost:9444/services",
    "enabled" : true,
    "tokenEndpoint" : "https://localhost:9444/oauth2/token",
    "consumerKeyClaim" : "azp",
    "scopesClaim" : "scp",
    "alias" : "https://localhost:9443/oauth2/token",
    "id" : "01234567-0123-0123-0123-012345678901",
    "userInfoEndpoint" : "https://localhost:9444/oauth2/userinfo?schema=openid",
    "displayTokenEndpoint" : "https://localhost:9444/oauth2/token",
    "displayRevokeEndpoint" : "https://localhost:9444/oauth2/revoke",
    "endpoints" : [ {
      "name" : "token_endpoint",
      "value" : "https://localhost:9443/oauth2/token"
    }, {
      "name" : "token_endpoint",
      "value" : "https://localhost:9443/oauth2/token"
    } ],
    "enableSelfValidationJWT" : true,
    "enableTokenEncryption" : false,
    "availableGrantTypes" : [ "client_credentials", "client_credentials" ],
    "claimMapping" : [ {
      "remoteClaim" : "http://idp.org/username",
      "localClaim" : "http://wso2.org/username"
    }, {
      "remoteClaim" : "http://idp.org/username",
      "localClaim" : "http://wso2.org/username"
    } ],
    "revokeEndpoint" : "https://localhost:9444/oauth2/revoke",
    "certificates" : {
      "type" : "JWKS",
      "value" : "value"
    },
    "name" : "WSO2 Identity Server",
    "wellKnownEndpoint" : "",
    "authorizeEndpoint" : "https://localhost:9444/oauth2/authorize",
    "enableTokenHashing" : false,
    "enableOAuthAppCreation" : false,
    "additionalProperties" : {
      "self_validate_jwt" : true,
      "Username" : "admin",
      "Password" : "admin"
    },
    "tokenValidation" : [ {
      "enable" : false,
      "id" : 0,
      "type" : "REFERENCE",
      "value" : { }
    }, {
      "enable" : false,
      "id" : 0,
      "type" : "REFERENCE",
      "value" : { }
    } ],
    "tokenType" : "EXCHANGED",
    "enableTokenGeneration" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all Key managers
 * Get all Key managers 
 *
 * returns KeyManagerList
 **/
exports.key_managersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "name" : "WSO2 IS",
    "description" : "This is a key manager for Developers",
    "id" : "01234567-0123-0123-0123-012345678901",
    "type" : "IS",
    "tokenType" : "EXCHANGED",
    "enabled" : true
  }, {
    "name" : "WSO2 IS",
    "description" : "This is a key manager for Developers",
    "id" : "01234567-0123-0123-0123-012345678901",
    "type" : "IS",
    "tokenType" : "EXCHANGED",
    "enabled" : true
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
 * Add a new API Key Manager
 * Add a new API Key Manager 
 *
 * body KeyManager Key Manager object that should to be added

 * returns KeyManager
 **/
exports.key_managersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "clientRegistrationEndpoint" : "https://localhost:9444/keymanager-operations/dcr/register",
  "displayName" : "WSO2 Identity Server",
  "enableMapOAuthConsumerApps" : false,
  "introspectionEndpoint" : "https://localhost:9444/oauth2/introspect",
  "scopeManagementEndpoint" : "https://wso2is.com:9444/api/identity/oauth2/v1.0/scopes",
  "description" : "This is a key manager for Developers",
  "type" : "WSO2-IS",
  "issuer" : "https://localhost:9444/services",
  "enabled" : true,
  "tokenEndpoint" : "https://localhost:9444/oauth2/token",
  "consumerKeyClaim" : "azp",
  "scopesClaim" : "scp",
  "alias" : "https://localhost:9443/oauth2/token",
  "id" : "01234567-0123-0123-0123-012345678901",
  "userInfoEndpoint" : "https://localhost:9444/oauth2/userinfo?schema=openid",
  "displayTokenEndpoint" : "https://localhost:9444/oauth2/token",
  "displayRevokeEndpoint" : "https://localhost:9444/oauth2/revoke",
  "endpoints" : [ {
    "name" : "token_endpoint",
    "value" : "https://localhost:9443/oauth2/token"
  }, {
    "name" : "token_endpoint",
    "value" : "https://localhost:9443/oauth2/token"
  } ],
  "enableSelfValidationJWT" : true,
  "enableTokenEncryption" : false,
  "availableGrantTypes" : [ "client_credentials", "client_credentials" ],
  "claimMapping" : [ {
    "remoteClaim" : "http://idp.org/username",
    "localClaim" : "http://wso2.org/username"
  }, {
    "remoteClaim" : "http://idp.org/username",
    "localClaim" : "http://wso2.org/username"
  } ],
  "revokeEndpoint" : "https://localhost:9444/oauth2/revoke",
  "certificates" : {
    "type" : "JWKS",
    "value" : "value"
  },
  "name" : "WSO2 Identity Server",
  "wellKnownEndpoint" : "",
  "authorizeEndpoint" : "https://localhost:9444/oauth2/authorize",
  "enableTokenHashing" : false,
  "enableOAuthAppCreation" : false,
  "additionalProperties" : {
    "self_validate_jwt" : true,
    "Username" : "admin",
    "Password" : "admin"
  },
  "tokenValidation" : [ {
    "enable" : false,
    "id" : 0,
    "type" : "REFERENCE",
    "value" : { }
  }, {
    "enable" : false,
    "id" : 0,
    "type" : "REFERENCE",
    "value" : { }
  } ],
  "tokenType" : "EXCHANGED",
  "enableTokenGeneration" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

