'use strict';


/**
 * Delete a Key Manager
 * Delete a Key Manager by keyManager id 
 *
 * keyManagerId String Key Manager UUID 
 * no response value expected for this operation
 **/
exports.key_managersKeyManagerIdDELETE = function(keyManagerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Key Manager Configuration
 * Retrieve a single Key Manager Configuration. We should provide the Id of the KeyManager as a path parameter. 
 *
 * keyManagerId String Key Manager UUID 
 * returns KeyManager
 **/
exports.key_managersKeyManagerIdGET = function(keyManagerId) {
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


/**
 * Update a Key Manager
 * Update a Key Manager by keyManager id 
 *
 * body KeyManager Key Manager object with updated information

 * keyManagerId String Key Manager UUID 
 * returns KeyManager
 **/
exports.key_managersKeyManagerIdPUT = function(body,keyManagerId) {
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

