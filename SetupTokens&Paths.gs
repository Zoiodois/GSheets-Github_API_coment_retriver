function setKey() {
  //Function to set the keys by the backend
  //Change <tokenValue> for your token key
  //The key is saved to the User propertys
  PropertiesService.getUserProperties().setProperty('AUTH_TOKEN', "<tokenValue>");

  setUserAgent();

}
//*

function setUserAgent() {
  //Funtion for setting the user agent after the key set
  //Recover login information from key verification method

  var keyObject = tokenAuthentication();
  Logger.log(keyObject)
  var login = keyObject.login;

  if (login) {
    PropertiesService.getUserProperties().setProperty('User-Agent', login);
  } //Handle exceptions; develop later

}
//*

function setPaths() {
  //Function to set the Paths for the folder request by the backend
  //Change <tokenValue> for your token key
  //The key is saved to the User propertys
  PropertiesService.getUserProperties().setProperty('OWNER', "Zoiodois");
  PropertiesService.getUserProperties().setProperty('REPO', "Imovei22");
}
//*

function returnUserAgent() {
  //Invoke to return a User-Agent 
   var userAgent =  PropertiesService.getUserProperties().getProperty('User-Agent');
   return userAgent;
}

function returnGitToken() {
  //Invoke to recorver the key and use it as variable
   var token =  PropertiesService.getUserProperties().getProperty('AUTH_TOKEN');
   return token;
}
//*


function returnOwner() {
  //Invoke to recorver the Owner of repo and use it as variable in API path
   var owner =  PropertiesService.getUserProperties().getProperty('OWNER');
   return owner;
}

function returnRepo() {
  //Invoke to recorver a repository name and use it as variable in API path
   var repo =  PropertiesService.getUserProperties().getProperty('REPO');
   return repo;
}


/*
function onOpen() {
  //For Reminder and Future Update 
  //-Include a FrontEnd website witha  HTML template and run this function!
    //Exemplo of how to set a menu on the Sheet or Document frontend. Not going to work in this script because is a standalone Script, not associated with a particula Doc ou Sheet.   
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Admin Actions').addItem('Update token',   
                                   'updateAuthToken').addToUi();
}

function updateAuthToken() {
    var ui = SpreadsheetApp.getUi();
    var tokenInput = ui.prompt("Please enter the auth token");
    var tokenValue = tokenInput.getResponseText();
    if (isEmpty(tokenValue)) {
        ui.alert("Token cannot be empty");
        return;
    }
    PropertiesService.getScriptProperties().setProperty(AUTH_TOKEN, 
    tokenValue);
}

*/

