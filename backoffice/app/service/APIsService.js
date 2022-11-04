'use strict';


/**
 * Get Details of an API
 * Using this operation, you can retrieve complete details of a single API. You need to provide the Id of the API to retrive it. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns API
 **/
exports.getAPI = function(runtimeId,apiId,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "hasThumbnail" : false,
  "monetization" : {
    "enabled" : true,
    "properties" : {
      "key" : "properties"
    }
  },
  "description" : "This is a simple API for Pizza Shack online pizza delivery store.",
  "transport" : [ "http", "https" ],
  "type" : "HTTP",
  "apiUsagePolicy" : "Unlimited",
  "version" : "1.0.0",
  "tags" : [ "pizza", "food" ],
  "revision" : {
    "displayName" : "REVISION 1",
    "description" : "removed a post resource",
    "createdTime" : "2000-01-23T04:56:07.000+00:00",
    "id" : "c26b2b9b-4632-4ca4-b6f3-521c8863990c"
  },
  "deployments" : [ {
    "name" : "US",
    "deployedTime" : "2022-10-28T06:13:35.024Z"
  }, {
    "name" : "Europe",
    "deployedTime" : "2022-10-28T06:13:35.024Z"
  } ],
  "operations" : [ {
    "target" : "/order/{orderId}",
    "verb" : "POST",
    "usagePlan" : "Unlimited"
  }, {
    "target" : "/menu",
    "verb" : "GET",
    "usagePlan" : "Unlimited"
  } ],
  "businessInformation" : {
    "technicalOwnerEmail" : "technicalowner@wso2.com",
    "businessOwnerEmail" : "businessowner@wso2.com",
    "businessOwner" : "businessowner",
    "technicalOwner" : "technicalowner"
  },
  "name" : "PizzaShackAPI",
  "context" : "pizza",
  "createdTime" : "createdTime",
  "lastUpdatedTime" : "lastUpdatedTime",
  "id" : "01234567-0123-0123-0123-012345678901",
  "state" : "CREATED",
  "categories" : [ ],
  "additionalProperties" : [ {
    "display" : true,
    "name" : "name",
    "value" : "value"
  }, {
    "display" : true,
    "name" : "name",
    "value" : "value"
  } ],
  "additionalPropertiesMap" : {
    "key" : {
      "display" : false,
      "name" : "name",
      "value" : "value"
    }
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
 * Get the API Definition
 * This operation can be used to retrieve the definition of an API. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns APIDefinition
 **/
exports.getAPIDefinition = function(runtimeId,apiId,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "schemaDefinition" : "schemaDefinition",
  "type" : "swagger"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Resource Paths of an API
 * This operation can be used to retrieve resource paths defined for a specific API. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * limit Integer Maximum size of resource array to return.  (optional)
 * offset Integer Starting point within the complete list of items qualified.  (optional)
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns ResourcePathList
 **/
exports.getAPIResourcePaths = function(runtimeId,apiId,limit,offset,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "next" : "next",
    "total" : 10,
    "offset" : 0,
    "previous" : "previous",
    "limit" : 1
  },
  "count" : 1,
  "list" : [ {
    "httpVerb" : "GET",
    "resourcePath" : "/menu",
    "id" : 1
  }, {
    "httpVerb" : "GET",
    "resourcePath" : "/menu",
    "id" : 1
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
 * Get Thumbnail Image
 * This operation can be used to download a thumbnail image of an API. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * no response value expected for this operation
 **/
exports.getAPIThumbnail = function(runtimeId,apiId,accept,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve/Search APIs 
 * This operation provides you a list of available APIs qualifying under a given search condition.  Each retrieved API is represented with a minimal amount of attributes. If you want to get complete details of an API, you need to use **Get details of an API** operation. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * limit Integer Maximum size of resource array to return.  (optional)
 * offset Integer Starting point within the complete list of items qualified.  (optional)
 * sortBy String Criteria for sorting.  (optional)
 * sortOrder String Order of sorting(ascending/descending).  (optional)
 * query String **Search condition**.  You can search in attributes by using an **\"<attribute>:\"** modifier.  Eg. \"provider:wso2\" will match an API if the provider of the API contains \"wso2\". \"provider:\"wso2\"\" will match an API if the provider of the API is exactly \"wso2\". \"status:PUBLISHED\" will match an API if the API is in PUBLISHED state.  Also you can use combined modifiers Eg. name:pizzashack version:v1 will match an API if the name of the API is pizzashack and version is v1.  Supported attribute modifiers are [**version, context, name, status, description, provider, api-category, tags, doc, contexttemplate, lcstate, content, type, label, enablestore, thirdparty**]  If no advanced attribute modifier has been specified,  the API names containing the search term will be returned as a result.  Please note that you need to use encoded URL (URL encoding) if you are using a client which does not support URL encoding (such as curl)  (optional)
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * returns APIList
 **/
exports.getAllAPIs = function(runtimeId,limit,offset,sortBy,sortOrder,query,ifNoneMatch,accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "next" : "next",
    "total" : 10,
    "offset" : 0,
    "previous" : "previous",
    "limit" : 1
  },
  "count" : 1,
  "list" : [ {
    "updatedTime" : "2021-02-11T09:57:25.000Z",
    "hasThumbnail" : true,
    "name" : "CalculatorAPI",
    "context" : "CalculatorAPI",
    "description" : "A calculator API that supports basic operations",
    "createdTime" : "2021-02-11T09:57:25.000Z",
    "id" : "01234567-0123-0123-0123-012345678901",
    "state" : "CREATED",
    "type" : "HTTP",
    "version" : "1.0.0"
  }, {
    "updatedTime" : "2021-02-11T09:57:25.000Z",
    "hasThumbnail" : true,
    "name" : "CalculatorAPI",
    "context" : "CalculatorAPI",
    "description" : "A calculator API that supports basic operations",
    "createdTime" : "2021-02-11T09:57:25.000Z",
    "id" : "01234567-0123-0123-0123-012345678901",
    "state" : "CREATED",
    "type" : "HTTP",
    "version" : "1.0.0"
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
 * Retrieve/Search Runtimes 
 * This operation provides you a list of available Runtimes qualifying under a given search condition.  Each retrieved Runtime is represented with a minimal amount of attributes. If you want to get complete details of an Runtime, you need to use **Get details of a Runtime** operation. 
 *
 * limit Integer Maximum size of resource array to return.  (optional)
 * offset Integer Starting point within the complete list of items qualified.  (optional)
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * returns RuntimeList
 **/
exports.getAllRuntimes = function(limit,offset,accept) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "next" : "next",
    "total" : 10,
    "offset" : 0,
    "previous" : "previous",
    "limit" : 1
  },
  "count" : 1,
  "list" : [ {
    "name" : "RuntimeDev1",
    "description" : "Runtime 1 used for dev",
    "id" : "01234567-0123-0123-0123-012345678901"
  }, {
    "name" : "RuntimeDev1",
    "description" : "Runtime 1 used for dev",
    "id" : "01234567-0123-0123-0123-012345678901"
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
 * Get details of a Runtime 
 * Using this operation, you can retrieve complete details of a single Runtime. You need to provide the Id of the Runtime to retrive it. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns Runtime
 **/
exports.getRuntime = function(runtimeId,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "RuntimeDev1",
  "description" : "Runtime 1 used for dev",
  "id" : "01234567-0123-0123-0123-012345678901"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an API
 * This operation can be used to update an existing API. But the properties `name`, `provider` and `version` cannot be changed. 
 *
 * body ModifiableAPI API object that needs to be updated
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns API
 **/
exports.updateAPI = function(body,runtimeId,apiId,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "hasThumbnail" : false,
  "monetization" : {
    "enabled" : true,
    "properties" : {
      "key" : "properties"
    }
  },
  "description" : "This is a simple API for Pizza Shack online pizza delivery store.",
  "transport" : [ "http", "https" ],
  "type" : "HTTP",
  "apiUsagePolicy" : "Unlimited",
  "version" : "1.0.0",
  "tags" : [ "pizza", "food" ],
  "revision" : {
    "displayName" : "REVISION 1",
    "description" : "removed a post resource",
    "createdTime" : "2000-01-23T04:56:07.000+00:00",
    "id" : "c26b2b9b-4632-4ca4-b6f3-521c8863990c"
  },
  "deployments" : [ {
    "name" : "US",
    "deployedTime" : "2022-10-28T06:13:35.024Z"
  }, {
    "name" : "Europe",
    "deployedTime" : "2022-10-28T06:13:35.024Z"
  } ],
  "operations" : [ {
    "target" : "/order/{orderId}",
    "verb" : "POST",
    "usagePlan" : "Unlimited"
  }, {
    "target" : "/menu",
    "verb" : "GET",
    "usagePlan" : "Unlimited"
  } ],
  "businessInformation" : {
    "technicalOwnerEmail" : "technicalowner@wso2.com",
    "businessOwnerEmail" : "businessowner@wso2.com",
    "businessOwner" : "businessowner",
    "technicalOwner" : "technicalowner"
  },
  "name" : "PizzaShackAPI",
  "context" : "pizza",
  "createdTime" : "createdTime",
  "lastUpdatedTime" : "lastUpdatedTime",
  "id" : "01234567-0123-0123-0123-012345678901",
  "state" : "CREATED",
  "categories" : [ ],
  "additionalProperties" : [ {
    "display" : true,
    "name" : "name",
    "value" : "value"
  }, {
    "display" : true,
    "name" : "name",
    "value" : "value"
  } ],
  "additionalPropertiesMap" : {
    "key" : {
      "display" : false,
      "name" : "name",
      "value" : "value"
    }
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
 * Upload a Thumbnail Image
 * This operation can be used to upload a thumbnail image of an API. The thumbnail to be uploaded should be given as a form data parameter `file`. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * ifMatch String Validator for conditional requests; based on ETag.  (optional)
 * returns FileInfo
 **/
exports.updateAPIThumbnail = function(runtimeId,apiId,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "relativePath" : "apis/01234567-0123-0123-0123-012345678901/thumbnail",
  "mediaType" : "image/jpeg"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

