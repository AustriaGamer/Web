function createTable(title, target) {
    document.getElementsByClassName(target)[0].innerHTML =
    "<h1 class='tableHeader'>" +
      title +
      "</h1><div class='horizontalline'></div>";
}
createTable("Test", "liveGames");

