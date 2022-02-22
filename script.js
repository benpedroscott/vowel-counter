
function vowelCounter() {

let mainString = document.getElementById("textarea").value;
let lowerString = mainString.toLowerCase();
let stringLength = mainString.length;
let vowelCount = 0;

  for (let i = 0; i < stringLength; i++) {
    let stringParse = lowerString[i];
    if (stringParse == "a" || stringParse == "e" || stringParse == "i" || stringParse == "o" || stringParse == "u") {
          vowelCount++;
        }
  } alert(vowelCount);
  console.log(mainString);
}
