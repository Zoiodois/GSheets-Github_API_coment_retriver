// REQUIRED Parameters Github
//'header': 'Accept' and 'User-Agent'

// Make a GET request to an open endpoint. No autentication needed
function getHub() {
  var options = {

    'header': "Accept: application/vnd.github+json",
    'method': 'GET', //-> Don't accept payload
    'contentType': 'application/json',
  };
  var url = 'https://api.github.com/octocat'
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
}
//*

//Study - Token Validation
//Send token in Options[headers] object as Autorizathion Key
function tokenAuthentication() {
  // Token to be veriefied
  var accessToken = returnGitToken();

  // Endpoint of API GitHub. User refers to the token User 
  var url = "https://api.github.com/user";

  // HTTP request options
  var options = {
    headers: {
      Authorization: "Bearer " + accessToken,
      "Accept": "application/vnd.github.v3+json"
    },
    muteHttpExceptions : true

  };

  // Make GET request for the API GitHub endpoint
  var response = UrlFetchApp.fetch(url, options);

  var statusCode = response.getResponseCode();
  var responseText = response.getContentText();
  Logger.log(responseText);

  if (statusCode == 200) {
    Logger.log("Valid Accces token");
  } else {
    Logger.log("Your access token has failed validation. Status: " + statusCode);
  }

  var jsonresponse = JSON.parse(responseText);
  return jsonresponse

}
//*

//Paths MUST be setted in SetupTokens&Paths.gs befores using the following functions



//Request a list of Issues in a especific repository:
//Remember that every API has own header needs. Always check the API Documentation
//For filter porpouse response is strigfied and than parse as JSON.
//In this case response was an array, so object[0] is needed.
function issuesRequest() {
  // Acces Token, user Paths declaration
  var accessToken = returnGitToken();
  var userAgent = returnUserAgent();
  var repoOwner = returnOwner();
  var repo = returnRepo();

  // Endpoint of API GitHub for Issues sent by user
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repo + "/issues";

  // Request Options
  var options = {
    headers: {
      //"Accept": "application/vnd.github.text+json",
      //"Accept" : "application/vnd.github.raw+json",
      //"Accept" : "application/vnd.github.html+json",
      "Accept": "application/vnd.github.full+json",
      "X-Accepted-GitHub-Permissions": "",
      "User-Agent": userAgent,
      Authorization: "Bearer " + accessToken
    },
    method: "GET",
    muteHttpExceptions: true,
    filter: "all"
  };

  // Make a GET request for the GitHub API Endpoint(url)
  var response = UrlFetchApp.fetch(url, options);

  var statusCode = response.getResponseCode();
  //Logger.log(typeof (response));

  var responseText = response.getContentText();
  //Logger.log(responseText);
  //Logger.log(typeof (responseText));

  var jsonresponse = JSON.parse(responseText);
  //Logger.log(typeof (jsonresponse));


  //Logger.log("This is the Text response as Textr /n" + responseText);
  //Logger.log("This is the response as JSON objetc /n" + jsonresponse[0].body_html);

  if (statusCode == 200) {
    Logger.log("Valid Accces token");
  } else {
    Logger.log("Your access token has failed validation. Status: " + statusCode);
  }
}
//*


// POST Mothod for Github "Issues"
function postIssueRequest() {
  
  // Acces Token, user Paths declaration
  var accessToken = returnGitToken();
  var userAgent = returnUserAgent();
  var repoOwner = returnOwner();
  var repo = returnRepo();

  // Endpoint of API GitHub for Issues sent by user
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repo + "/issues";
  var userAgent = returnUserAgent();


  //Payload for the solicitation
  //Make it dinamyc in future
  var data = {
    'title': "Change userProrpierties for Script proprieties",
    'body': "Script proprieties is safer, not avaiable by other user's Scripts"
  }
  // Opções para a solicitação
  var options = {
    headers: {
      "Accept": "application/vnd.github+json",
      "User-Agent": userAgent,
      Authorization: "Bearer " + accessToken
    },
    method: "POST",
    muteHttpExceptions: true,
    'payload': JSON.stringify(data)
  };

  // GET Request for the API endpoint
  var response = UrlFetchApp.fetch(url, options);
  var statusCode = response.getResponseCode();
  Logger.log(statusCode);

  var responseText = response.getContentText();

  var jsonresponse = JSON.parse(responseText);
  //Logger.log(typeof(jsonresponse));
  Logger.log("This is response as Text:/n/n " + responseText);
  Logger.log("This is response as JSON:/n/n " + jsonresponse);

  if (statusCode == 201) {
    Logger.log("Post Succes");
  } else {
    Logger.log("Ops, something went wrong, status code:" + statusCode);
  }
}
//*


//Return a Issue by numberId
function getIssueRequestByNumber() {

  // Acces Token, user Paths declaration
  var accessToken = returnGitToken();
  var userAgent = returnUserAgent();
  var repoOwner = returnOwner();
  var repo = returnRepo();
  var issueNumber = 1; //Make it dynamic

  // Endpoint of API GitHub for Issues sent by user
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repo + "/issues/"+ issueNumber;

  Logger.log(url)
  //Request Options
  var options = {
    headers: {
      "Accept": "application/vnd.github+json",
     //"User-Agent": userAgent,
      //Authorization: "Bearer " + accessToken
    },
    method: "GET",
    muteHttpExceptions: true
  };

  // GET Request for the endpoint da API GitHub
  var response = UrlFetchApp.fetch(url, options);
  var statusCode = response.getResponseCode();
  var responseText = response.getContentText();
  var jsonresponse = JSON.parse(responseText);
  //Logger.log(typeof(jsonresponse));
  Logger.log("This is response as Text:/n/n " + responseText);
  Logger.log("This is response as Json in .body key:/n/n " + jsonresponse.body);

  if (statusCode == 200) {
    Logger.log("Issue Recovered with Succes!");
  } else {
    Logger.log("Ops, something went wrong, status code:" + statusCode);
  }
}
//*


//UPDATE an Especifc Issues by Id
function updateIssueRequest() {

  // Acces Token, user Paths declaration
  var accessToken = returnGitToken();
  var userAgent = returnUserAgent();
  var repoOwner = returnOwner();
  var repo = returnRepo();
  var issueNumber = 3; //Make it dynamic

  // Endpoint of API GitHub for Issues sent by user
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repo + "/issues/"+ issueNumber;

  var data = {
    'title': "This is a PATCH, very good one",
    'body': "This is a Patch Issue!"
  }

  // Request options
  var options = {
    headers: {
      "Accept": "application/vnd.github.json",
      "User-Agent": userAgent,
      Authorization: "Bearer " + accessToken
    },
    method: "PATCH",
    muteHttpExceptions: true,
    "payload": JSON.stringify(data)
  };

  // GET Rquest for the API GitHub endpoint
  var response = UrlFetchApp.fetch(url, options);
  var statusCode = response.getResponseCode();
  var responseText = response.getContentText();
  var jsonresponse = JSON.parse(responseText);
  //Logger.log(typeof(jsonresponse));
  Logger.log("This is response as Text:/n/n " + responseText);
  Logger.log("This is response as Json in .body key:/n/n " + jsonresponse.body);

  if (statusCode == 200) {
    Logger.log("Issue Updated with Succes!");
  } else {
    Logger.log("Ops, something went wrong, status code:" + statusCode);
  }

}






