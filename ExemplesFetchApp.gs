//Basic exemples of URLFecthAPP. See more in:
//https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app?hl=pt-br#advanced-parameters
//contentType, headers, method, payload, useIntranet, validateHttpsCertificates(bool), followRedirects(true or false), muteHttpExceptions, escaping.
//"GET" method dont accept payload 
function myFunction() {
  // Make a GET request and log the returned content.
  var response = UrlFetchApp.fetch('http://www.google.com/');
  Logger.log(response.getContentText());
}
//*

function withFormData() {
  // Make a POST request with form data.
  var resumeBlob = Utilities.newBlob('Hire me!', 'text/plain', 'resume.txt');
  var formData = {
    'name': 'Bob Smith',
    'email': 'bob@example.com',
    'resume': resumeBlob
  };
  // Because payload is a JavaScript object, it is interpreted as
  // as form data. (No need to specify contentType; it automatically
  // defaults to either 'application/x-www-form-urlencoded'
  // or 'multipart/form-data')
  var options = {
    'method': 'post',
    'payload': formData
  };
  var response = UrlFetchApp.fetch('https://httpbin.org/post', options);
  Logger.log(response.getContentText());

}
//*

//With some params and payload
function withJsonData() {
  // Make a POST request with a JSON payload.
  var data = {
    'name': 'Bob Smith',
    'age': 35,
    'pets': ['fido', 'fluffy']
  };
  var options = {
    'headers': {},//not need for this API
    'method': 'post',
    'contentType': 'application/json',
    // Convert the JavaScript object to a JSON string.
    'payload': JSON.stringify(data)
  };
  var response = UrlFetchApp.fetch('https://httpbin.org/post', options);
  Logger.log(response.getContentText());

}
//*