var weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(weekdays);

weekdays.forEach(function (day){
  console.log(day);
});
console.log("SOME BREAK <br>");
var x;
for (x in weekdays) {
  console.log(weekdays[x]);
}

var obj = {f: 1, b: 2, c: 7 };

for (var y in obj) {
  console.log("obj." + y + ":" + obj[y]);
}