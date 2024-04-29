#New Version; Now with frontEnd avaiable
Link: https://script.google.com/macros/s/AKfycbyZkulnMO0hh_rABJHMkDXT1-ZaHSkg5oa4jHal0fam/dev

Acces the link. Inform a repository Owner, than a repository name and finally the ID of the issue you want to retrive. The issue's body is gonna be displayed in the Request Issue Box

# URLFetchApp-Exemples---Github-API-Conection
*/
This Aplication is ment to use Google App Script env for an API conection with GitHub.

1-Tokens and Paths Configurations:
After clonning this repository into your Google App Script file, open SetupTokens&Path.gs

setKey() -> Change <youtoken> for your Personal acces token*. Run set key.
*You can generat one in the Developer Settings of your Github account. Set its reporsitory permissions for read and write in <metadata> and <administration and issues>

setPaths() -> Change 'OWNER' and 'REPO' values for the repository owners name and file name of the repository that you want to look at set the path;

Open gitHub.gs to wee the methods
gethub() -> Simple exemple of a HTTP Request withh no authentication

tokenAuthentication()-> Checks the token. If its a bad token maybe you didn't authorized it. Check the * above.
When tokenAuthentication() runs, it invoke setUserAgent() that calls the API, check the users token and set a userProprieties called User-Agent with the users login identification returned in the token validation process.

issueRequest() -> Returns a list of Issues sent by the user in the repository informed on the path configuration

postIssueRequest() -> Makes a post request for a new issue. Change title and Body to custumize your request

getIssueRequestByNumber() -> Set the issueNumber variable with the Issues Number.

updateIssueRequest() -> Set the issueNumber variable with the Issues Number.Change title and Body to custumize your request


*/


