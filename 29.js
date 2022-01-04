var num1 = 6;
var result;
switch (num1) {
  case 6:
    result = "the num1 is 6";
    break;
  case 4:
    result = "the num1 is 4";
    break;
  case 5:
    result = "the num1 is 5";
    break;
  case "abc":
    result = "the num1 is abc";
    break;
  default:
    result = "Somethingis not right";
    break;
}
console.log(result);