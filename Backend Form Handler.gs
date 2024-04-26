function getIssueFromHtml(data) {
  Logger.log(data);

  var repoOwner = data.repoOwner;
  var repo = data.repo;
  var issueNumber = data.issueId; //Make it dynamic

  // Endpoint of API GitHub for Issues sent by user
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repo + "/issues/" + issueNumber;

  //Request Options
  var options = {
    headers: {
      "Accept": "application/vnd.github+json",
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

  return jsonresponse.body




}
//*
/*
 
function sendTemp(email, id, name) {
    var emailMessage = HtmlService.createHtmlOutputFromFile('email').getContent();
    Logger.log(emailMessage);
    emailMessage = emailMessage.replace('#NAME', name);
    emailMessage = emailMessage.replace('#MESSAGE', 'Thank you for contacting us, your reference is ' + id);
    MailApp.sendEmail(email, 'Thank You', '', {
        htmlBody: emailMessage
    });
}
 

 
function mailSending() {
    var now = new Date();
    GmailApp.sendEmail("gappscourses@gmail.com", "Time Message tester", "The time is: " + now.toString());
}
 
function testSheet() {
    //var ss = SpreadsheetApp.openById("1jbPTCDQGqH9F7Wfdtmtp5Hhj-fJcU2i0Wyo8rq7YKV4");
    var ss = SpreadsheetApp.openById("1jbPTCDQGqH9F7Wfdtmtp5Hhj-fJcU2i0Wyo8rq7YKV4");
    var sheet = ss.getSheetByName("messages");
    var now = new Date();
    sheet.appendRow(['44', now, 'test', 'test@email.com', 500]);
    Logger.log(sheet.getName());
    Logger.log(ss.getNumSheets());
    Logger.log(ss.getName());
}
*/