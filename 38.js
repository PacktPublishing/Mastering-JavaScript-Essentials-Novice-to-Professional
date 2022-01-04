var weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
document.write("<table>");

for(a = 2; a <= 12; a++){
  document.write("<tr>");
  for(b = 1; b <= 10; b++){
    document.write("<td>" + a * b + "</td>");
  }
  document.write("</tr>");
}

document.write("</table>");