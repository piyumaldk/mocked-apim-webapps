'use strict';

var utils = require('../utils/writer.js');
var APIDocuments = require('../service/APIDocumentsService');

module.exports.addAPIDocument = function addAPIDocument (req, res, next, body, runtimeId, apiId) {
  APIDocuments.addAPIDocument(body, runtimeId, apiId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addAPIDocumentContent = function addAPIDocumentContent (req, res, next, runtimeId, apiId, documentId, ifMatch) {
  APIDocuments.addAPIDocumentContent(runtimeId, apiId, documentId, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAPIDocument = function deleteAPIDocument (req, res, next, runtimeId, apiId, documentId, ifMatch) {
  APIDocuments.deleteAPIDocument(runtimeId, apiId, documentId, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPIDocument = function getAPIDocument (req, res, next, runtimeId, apiId, documentId, accept, ifNoneMatch) {
  APIDocuments.getAPIDocument(runtimeId, apiId, documentId, accept, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPIDocumentContent = function getAPIDocumentContent (req, res, next, runtimeId, apiId, documentId, accept, ifNoneMatch) {
  APIDocuments.getAPIDocumentContent(runtimeId, apiId, documentId, accept, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAPIDocuments = function getAPIDocuments (req, res, next, runtimeId, apiId, limit, offset, accept, ifNoneMatch) {
  APIDocuments.getAPIDocuments(runtimeId, apiId, limit, offset, accept, ifNoneMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAPIDocument = function updateAPIDocument (req, res, next, body, runtimeId, apiId, documentId, ifMatch) {
  APIDocuments.updateAPIDocument(body, runtimeId, apiId, documentId, ifMatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
