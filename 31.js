var operator, val1, val2;
operator = prompt("Enter the Operator");
val1 = parseInt(prompt("Enter First number"));
val2 = parseInt(prompt("Enter Second number"));

switch (operator) {
  case "-":
    result = val1 - val2;
    break;
  case "+":
    result = val1 + val2;
    break;
  case "/":
    result = val1 / val2;
    break;
  case "*":
    result = val1 * val2;
    break;
  default:
    result = "Something went wrong";
    break;
}