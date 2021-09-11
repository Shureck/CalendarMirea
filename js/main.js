/**
 * Sample JavaScript code for calendar.events.insert
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */
function authenticate() {
  return gapi.auth2.getAuthInstance()
    .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"})
    .then(function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      });
}

function loadClient() {
  gapi.client.setApiKey("AIzaSyDlZSE6ZaMUdzOVZZ_KRzxeGEcbFgo4qFE");
  return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
    .then(function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      });
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
    .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      });
}

function reload_page() {
  window.location.reload();
}

function get_week_shedule(group){
  var xmlHttp = new XMLHttpRequest();
  // theUrl = `https://schedule-rtu.rtuitlab.dev/api/schedule/${group}/week`
  theUrl = `https://schedule-rtu.rtuitlab.dev/api/schedule/%D0%98%D0%9A%D0%91%D0%9E-13-19/week`
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return JSON.parse(xmlHttp.response);
}

function next_mond_date() {
  var d = new Date();
  var monthNames = new Array("Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь");

//допустим сегодня 13 текущего месяца

  var currentHour = d.getHours(); // 18 для проверки

  if (currentHour < 19) {
    // до 19:00, показываем текущий понедельник
    d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
  } else {
    //после 19:00, показываем следующий понедельник
    d.setDate(d.getDate() + (7 - d.getDay()) % 7 + 1);
  }
  return d;
}

function add_days_in_calender(){
  shed = get_week_shedule('ИКБО-13-19');
  console.log(shed);
  new_date = next_mond_date();
  days = ["monday","tuesday","wednesday","thursday","friday","saturday"];

  // days.forEach(function(day) {
  //   shed[day].forEach(function (less){
  //     console.log(less)
  //   });
  // });
  shed["monday"].forEach(function (less){
    if(less["lesson"] != null){
      console.log(less)

      start_time = new Date(new_date);
      start_time.setHours(less['time']['start'].split(":")[0],less['time']['start'].split(":")[1]);

      end_time = new Date(new_date);
      end_time.setHours(less['time']['end'].split(":")[0],less['time']['end'].split(":")[1]);

      gapi.client.calendar.events.insert({
        "calendarId": "47qh2guhe4ug4cocr389kescc0@group.calendar.google.com",
        "sendNotifications": false,
        "sendUpdates": "all",
        "supportsAttachments": false,
        "resource": {
          "end": {
            "dateTime": end_time.toISOString()
          },
          "start": {
            "dateTime": start_time.toISOString()
          },
          "description": "Key",
          "summary": `[${less['lesson']['classRoom']}] ${less['lesson']['name']}`
        }
      })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
          },
          function (err) {
            console.error("Execute error", err);
          });
    }
  });
}

gapi.load("client:auth2", function () {
  gapi.auth2.init({client_id: "98182763702-p08s2s242031l2c6d0jsn8mk5fv3hv0d.apps.googleusercontent.com"});
});
