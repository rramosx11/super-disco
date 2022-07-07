// var dateToday = document.querySelector("#date-today");
// var currentTime = moment();

// dateToday.textContent =
//   currentTime.format("dddd") +
//   "," +
//   currentTime.format("MMM DD, YYYY - hh:mm:ss a");

$("#date-today h6").text(
  moment().format("dddd") + ", " + moment().format("MMMM Do YYYY, h:mm:ss a")
);
