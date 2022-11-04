'use strict';


/**
 * Add a New Document to an API
 * This operation can be used to add a new documentation to an API. This operation only adds the metadata of a document. To add the actual content we need to use **Upload the content of an API document ** API once we obtain a document Id by this operation. 
 *
 * body Document Document object that needs to be added
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * returns Document
 **/
exports.addAPIDocument = function(body,runtimeId,apiId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "summary" : "Summary of PizzaShackAPI Documentation",
  "lastUpdatedBy" : "admin",
  "fileName" : "",
  "visibility" : "API_LEVEL",
  "otherTypeName" : "",
  "type" : "HOWTO",
  "sourceUrl" : "",
  "sourceType" : "INLINE",
  "createdBy" : "admin",
  "name" : "PizzaShackDoc",
  "createdTime" : "createdTime",
  "documentId" : "01234567-0123-0123-0123-012345678901",
  "lastUpdatedTime" : "lastUpdatedTime",
  "inlineContent" : "This is doc content. This can have many lines."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Upload the Content of an API Document
 * Thid operation can be used to upload a file or add inline content to an API document.  **IMPORTANT:** * Either **file** or **inlineContent** form data parameters should be specified at one time. * Document's source type should be **FILE** in order to upload a file to the document using **file** parameter. * Document's source type should be **INLINE** in order to add inline content to the document using **inlineContent** parameter. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * documentId String Document Identifier 
 * ifMatch String Validator for conditional requests; based on ETag.  (optional)
 * returns Document
 **/
exports.addAPIDocumentContent = function(runtimeId,apiId,documentId,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "summary" : "Summary of PizzaShackAPI Documentation",
  "lastUpdatedBy" : "admin",
  "fileName" : "",
  "visibility" : "API_LEVEL",
  "otherTypeName" : "",
  "type" : "HOWTO",
  "sourceUrl" : "",
  "sourceType" : "INLINE",
  "createdBy" : "admin",
  "name" : "PizzaShackDoc",
  "createdTime" : "createdTime",
  "documentId" : "01234567-0123-0123-0123-012345678901",
  "lastUpdatedTime" : "lastUpdatedTime",
  "inlineContent" : "This is doc content. This can have many lines."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Document of an API
 * This operation can be used to delete a document associated with an API. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * documentId String Document Identifier 
 * ifMatch String Validator for conditional requests; based on ETag.  (optional)
 * no response value expected for this operation
 **/
exports.deleteAPIDocument = function(runtimeId,apiId,documentId,ifMatch) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Document of an API
 * This operation can be used to retrieve a particular document's metadata associated with an API. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * documentId String Document Identifier 
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns Document
 **/
exports.getAPIDocument = function(runtimeId,apiId,documentId,accept,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "summary" : "Summary of PizzaShackAPI Documentation",
  "lastUpdatedBy" : "admin",
  "fileName" : "",
  "visibility" : "API_LEVEL",
  "otherTypeName" : "",
  "type" : "HOWTO",
  "sourceUrl" : "",
  "sourceType" : "INLINE",
  "createdBy" : "admin",
  "name" : "PizzaShackDoc",
  "createdTime" : "createdTime",
  "documentId" : "01234567-0123-0123-0123-012345678901",
  "lastUpdatedTime" : "lastUpdatedTime",
  "inlineContent" : "This is doc content. This can have many lines."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the Content of an API Document
 * This operation can be used to retrive the content of an API's document.  The document can be of 3 types. In each cases responses are different.  1. **Inline type**:    The content of the document will be retrieved in `text/plain` content type     _Sample cURL_ : `curl -k -H \"Authorization:Bearer 579f0af4-37be-35c7-81a4-f1f1e9ee7c51\" -F inlineContent=@\"docs.txt\" -X POST \"https://localhost:9443/api/apk/backoffice/v1/runtimes/7a2298c4-c905-403f-8fac-38c73301631f/apis/995a4972-3178-4b17-a374-756e0e19127c/documents/43c2bcce-60e7-405f-bc36-e39c0c5e189e/content` 2. **FILE type**:    The file will be downloaded with the related content type (eg. `application/pdf`) 3. **URL type**:     The client will recieve the URL of the document as the Location header with the response with - `303 See Other` 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * documentId String Document Identifier 
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * no response value expected for this operation
 **/
exports.getAPIDocumentContent = function(runtimeId,apiId,documentId,accept,ifNoneMatch) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a List of Documents of an API
 * This operation can be used to retrive a list of documents belonging to an API by providing the ID of the API. 
 *
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * limit Integer Maximum size of resource array to return.  (optional)
 * offset Integer Starting point within the complete list of items qualified.  (optional)
 * accept String Media types acceptable for the response. Default is application/json.  (optional)
 * ifNoneMatch String Validator for conditional requests; based on the ETag of the formerly retrieved variant of the resource.  (optional)
 * returns DocumentList
 **/
exports.getAPIDocuments = function(runtimeId,apiId,limit,offset,accept,ifNoneMatch) {
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
    "summary" : "Summary of PizzaShackAPI Documentation",
    "lastUpdatedBy" : "admin",
    "fileName" : "",
    "visibility" : "API_LEVEL",
    "otherTypeName" : "",
    "type" : "HOWTO",
    "sourceUrl" : "",
    "sourceType" : "INLINE",
    "createdBy" : "admin",
    "name" : "PizzaShackDoc",
    "createdTime" : "createdTime",
    "documentId" : "01234567-0123-0123-0123-012345678901",
    "lastUpdatedTime" : "lastUpdatedTime",
    "inlineContent" : "This is doc content. This can have many lines."
  }, {
    "summary" : "Summary of PizzaShackAPI Documentation",
    "lastUpdatedBy" : "admin",
    "fileName" : "",
    "visibility" : "API_LEVEL",
    "otherTypeName" : "",
    "type" : "HOWTO",
    "sourceUrl" : "",
    "sourceType" : "INLINE",
    "createdBy" : "admin",
    "name" : "PizzaShackDoc",
    "createdTime" : "createdTime",
    "documentId" : "01234567-0123-0123-0123-012345678901",
    "lastUpdatedTime" : "lastUpdatedTime",
    "inlineContent" : "This is doc content. This can have many lines."
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
 * Update a Document of an API
 * This operation can be used to update metadata of an API's document. 
 *
 * body Document Document object that needs to be added
 * runtimeId String **Runtime ID** consisting of the **UUID** of the Runtime. 
 * apiId String **API ID** consisting of the **UUID** of the API. 
 * documentId String Document Identifier 
 * ifMatch String Validator for conditional requests; based on ETag.  (optional)
 * returns Document
 **/
exports.updateAPIDocument = function(body,runtimeId,apiId,documentId,ifMatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "summary" : "Summary of PizzaShackAPI Documentation",
  "lastUpdatedBy" : "admin",
  "fileName" : "",
  "visibility" : "API_LEVEL",
  "otherTypeName" : "",
  "type" : "HOWTO",
  "sourceUrl" : "",
  "sourceType" : "INLINE",
  "createdBy" : "admin",
  "name" : "PizzaShackDoc",
  "createdTime" : "createdTime",
  "documentId" : "01234567-0123-0123-0123-012345678901",
  "lastUpdatedTime" : "lastUpdatedTime",
  "inlineContent" : "This is doc content. This can have many lines."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

