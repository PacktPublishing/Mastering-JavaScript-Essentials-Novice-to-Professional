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
for (i = 0; i < weekdays.length; i++){
  if (weekdays[i] == "Thursday"){
    break;
  }
  console.log(weekdays[i]);
}
console.log("SOME BREAK");

weekdays.forEach(function (days){
  console.log(days);
});