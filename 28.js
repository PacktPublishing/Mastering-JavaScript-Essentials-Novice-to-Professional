// Keep changing the values of these variables between true/false to have different results.
var libraryObj = {
  library: true,
  computerSection: true,
  programmingSection: true,
  javascriptProgrammingSection: false,
  pythonProgrammingSection: true
}
var result;
if(libraryObj.library){
  if(libraryObj.computerSection){
    if(libraryObj.programmingSection){
      if(libraryObj.javascriptProgrammingSection){
        result = "We got the JavaScript Book Yayyy!";
      } else if (libraryObj.pythonProgrammingSection) {
        result = "We got the Python Book Yayyy!";
      } else {
        result = "Everything is open but no javascript for now.";
      }
    } else {
      result = "Library and the Computer Section is open but no for programming";
    }
  } else {
    result = "Library is open but Computer Section is not :( sad life";
  }
} else {
  result = "Library is even not open :( sad!";
}
document.write(result);