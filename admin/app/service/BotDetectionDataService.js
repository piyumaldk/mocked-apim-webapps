'use strict';


/**
 * Get all Bot Detected Data 
 * Get all bot detected data 
 *
 * returns BotDetectionDataList
 **/
exports.getBotDetectionData = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 1,
  "list" : [ {
    "apiMethod" : "GET",
    "messageBody" : "<soapenv:Body xmlns:soapenv=\\\"http://www.w3.org/2003/05/soap-envelope\\\"/>",
    "clientIp" : "127.0.0.1",
    "messageID" : "urn:uuid:1ed6d2de-29df-4fed-a96a-46d2329dce65",
    "headerSet" : "[Accept=*/*, Host=localhost:8243, User-Agent=curl/7.58.0]",
    "recordedTime" : 1591734138413
  }, {
    "apiMethod" : "GET",
    "messageBody" : "<soapenv:Body xmlns:soapenv=\\\"http://www.w3.org/2003/05/soap-envelope\\\"/>",
    "clientIp" : "127.0.0.1",
    "messageID" : "urn:uuid:1ed6d2de-29df-4fed-a96a-46d2329dce65",
    "headerSet" : "[Accept=*/*, Host=localhost:8243, User-Agent=curl/7.58.0]",
    "recordedTime" : 1591734138413
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

