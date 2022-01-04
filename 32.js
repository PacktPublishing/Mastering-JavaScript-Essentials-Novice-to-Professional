var book = "psychology";

switch (book) {
  case "litrature":
  case "science":
  case "math":
    console.log("we got it");
    break;
  case "sociology":
    console.log("No, that's not it");
    break;
  default:
    console.log("Something is messed up!");
    break;
}