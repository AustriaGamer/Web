let info = {
  matches: [],
  teams: [],
  teamsInHtml: [],
};

function loadFromServer(url, store) {
  fetch(url, {
    headers: { "X-Auth-Token": "698e6a5978c541439c1d87a65c92eb11" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      switch (store) {
        case "matches":
          info.matches = data;
          break;
        case "teams":
          info.teams = data;
          console.log(info.teams);
          createTeamOverview()
          break;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function createTable(title, target) {
  document.getElementsByClassName(target)[0].innerHTML =
    "<h1 class='tableHeader'>" +
    title +
    "</h1><div class='horizontalline'></div>";
}

function createTeamOverview() {
  let html = "";
  for (i = 0; i < info.teams.count; i++) {
    html =
      html +
      "<div class='teams'><div class='teamsCrest'><img src='" +
      info.teams.teams[i].crestUrl +
      "'></div><div class='teamsName'><p>" +
      info.teams.teams[i].name +
      "</p></div></div>";
  }
  document.getElementsByClassName("teamsContent")[0].innerHTML = html;
}

//createTable("Test", "liveGames");

function start() {
  loadFromServer("http://api.football-data.org/v2/matches", "matches");
  loadFromServer(
    "https://api.football-data.org/v2/competitions/2021/teams",
    "teams"
  );

  console.log(info.teams);
}
start()
