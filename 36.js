var weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

for(i = 0; i <= 10; i++){
  if(i == 5){
    continue;
  }
  console.log(i + ". Hello Programmers!");
}

for(i = 0; i <= 10; i++){
  console.log(i + ". Hello Programmers! Negative");
  if(i == 5){
    break;
  }
}