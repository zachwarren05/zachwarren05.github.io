var d = new Date();
var dayNames = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var day = dayNames[d.getDay()];
var monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var month = monthNames[d.getMonth()];
var n = d.getFullYear();
document.getElementById('date').textContent = day + ", " + d.getDate() + " " + month + " " + n;
document.getElementById('year').textContent = n;

let message = "";

if (day == 'Friday') {
    announcement = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park.";
    document.querySelector("#saturday").textContent = announcement;
}

else {
    let otherDays = document.querySelector("#saturday");
    otherDays.remove();
}

function toggleMenu() {
    document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}