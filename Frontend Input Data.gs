function doGet(e) {
  //Whenever the endpoint is requested, doGet() generates a HTML OUTPUT using IFRAME
  var htmlTemplate = HtmlService.createTemplateFromFile('Inputs Template'); 
  //htmlTemplate.data = {}
  var html = htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  return  html
}