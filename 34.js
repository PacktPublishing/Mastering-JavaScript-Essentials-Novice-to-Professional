var weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(weekdays.toString());
weekdays.forEach(function(day, i){
  if(day == "Thursday"){
  } else {
    console.log("This is " + day + " and the index is " + i);
  }
});