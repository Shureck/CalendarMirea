
  /**
  * Sample JavaScript code for calendar.events.insert
  * See instructions for running APIs Explorer code samples locally:
  * https://developers.google.com/explorer-help/guides/code_samples#javascript
  */

  function authenticate() {
  return gapi.auth2.getAuthInstance()
  .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"})
  .then(function() { console.log("Sign-in successful"); },
  function(err) { console.error("Error signing in", err); });
}
  function loadClient() {
  gapi.client.setApiKey("AIzaSyDlZSE6ZaMUdzOVZZ_KRzxeGEcbFgo4qFE");
  return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
  .then(function() { console.log("GAPI client loaded for API"); },
  function(err) { console.error("Error loading GAPI client for API", err); });
}
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
  return gapi.client.calendar.events.insert({
  "calendarId": "47qh2guhe4ug4cocr389kescc0@group.calendar.google.com",
  "sendNotifications": false,
  "sendUpdates": "all",
  "supportsAttachments": false,
  "resource": {
  "end": {
  "dateTime": "2020-09-09T15:00:00+03:00"
},
  "start": {
  "dateTime": "2020-09-09T13:00:00+03:00"
},
  "description": "Key"
}
})
  .then(function(response) {
  // Handle the results here (response.result has the parsed body).
  console.log("Response", response);
},
  function(err) { console.error("Execute error", err); });
}
  function reload_page(){
    window.location.reload();
  }
  gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "98182763702-p08s2s242031l2c6d0jsn8mk5fv3hv0d.apps.googleusercontent.com"});
});
