var num1 = 5;
var result;
switch (true) {
  case num1 >= 6:
    result = "the num1 is 6";
    break;
  case num1 >= 5:
    result = "the num1 is 5";
    break;
  default:
    result = "Somethingis not right";
    break;
}
console.log(result);