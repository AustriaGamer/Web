let month = 9;
let year = 2021;
let border = "<div class='border'>|</div>";
let calendar = "<div class='calendar'>";

//document.getElementById("next").onclick(changeDate(1));
//document.getElementById("last").onclick(changeDate(-1));
function changeDate(dir) {
  if (month + dir > 11) {
    month = 0;
    year += 1;
  } else if (month + dir < 0) {
    month = 11;
    year -= 1;
  } else {
    month += dir;
  }
  drawCalender();
}

function daysInMonth(mo) {
  return new Date(year, month + mo, 0).getDate();
}

function createArray(day, maxDays) {
  let days = [];
  let oldMonthDays = daysInMonth(0);
  for (let i = 1 - day; i <= maxDays; i++) {
    if (i <= 0) {
      days.push(oldMonthDays + i);
    } else {
      days.push(i);
    }
  }
  return days;
}
function drawHeader(num) {
  switch (num) {
    case 0:
      document.write(
        calendar +
          border +
          setInDiv("Jänner", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 1:
      document.write(
        calendar +
          border +
          setInDiv("Februar", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 2:
      document.write(
        calendar +
          border +
          setInDiv("März", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 3:
      document.write(
        calendar +
          border +
          setInDiv("April", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 4:
      document.write(
        calendar +
          border +
          setInDiv("Mai", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 5:
      document.write(
        calendar +
          border +
          setInDiv("Juni", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 6:
      document.write(
        calendar +
          border +
          setInDiv("Juli", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 7:
      document.write(
        calendar +
          border +
          setInDiv("August", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 8:
      document.write(
        calendar +
          border +
          setInDiv("September", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 9:
      document.write(
        calendar +
          border +
          setInDiv("Oktober", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 10:
      document.write(
        calendar +
          border +
          setInDiv("November", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
    case 11:
      document.write(
        calendar +
          border +
          setInDiv("Dezember", "header") +
          setInDiv(year, "header") +
          border +
          "</div>"
      );
      break;
  }
}
function drawSubHeader() {
  document.write(
    calendar +
      border +
      text("MO") +
      border +
      text("DI") +
      border +
      text("MI") +
      border +
      text("DO") +
      border +
      text("FR") +
      border +
      text("SA") +
      border +
      text("SO") +
      border +
      "</div>"
  );
}
function drawDays(days, day) {
  document.write(calendar);
  document.write("<div class='border'>|</div> ");
  for (let i = 1; i < days.length || (i - 1) % 7 != 0; i++) {
    if (i >= days.length) {
      document.write(
        "<div class='otherdays'>" +
          text(i - days.length + 1) +
          "</div>" +
          border
      );
    } else if (i < day) {
      document.write(
        "<div class='otherdays'>" + text(days[i]) + "</div>" + border
      );
    } else {
      document.write("<div class='days'>" + text(days[i]) + "</div>" + border);
    }

    if (i % 7 == 0 && i != 0 && days.length - 1 != i && days.length > i) {
      document.write("</div> ");
      document.write(calendar);
      document.write(border);
    }
  }
  document.write("</div>");
  document.write("<link class='calendar' rel='stylesheet' href='style.css'> ");
}
function setInDiv(text, textClass) {
  return '<div class="' + textClass + '">' + text + "</div>";
}
function clearDocument() {
  let element = document.getElementsByClassName("calendar");
  for (let i = element.length - 1; i >= 0; i--) {
    element[i].parentNode.removeChild(element[i]);
  }
}

function drawCalender() {
  clearDocument();
  let day = new Date(month + 1 + " 01, " + year + " 01:00:00").getDay();
  if (day == 0) {day = 7};
  let maxDays = daysInMonth(1);
  let days = createArray(day, maxDays);
  document.write(
    calendar + '<button id="last" onclick="changeDate(-1);"><<</button>'
  );
  document.write(
    '<button id= "next" onclick="changeDate(1)">>></button></div>'
  );
  drawHeader(month);
  drawSubHeader();
  drawDays(days, day);
  document.write("<link class='calendar' rel='stylesheet' href='style.css'> ");
}
function text(t) {
  return "<div class='text'>" + t + "</div>";
}

drawCalender();
