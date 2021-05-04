var input = document.querySelector("#text--input");
var button = document.querySelector("#translate");
var output = document.querySelector("#output--area");

function createURL(text) {
  return "https://api.funtranslations.com/translate/minion.json?text=" + text;
}

button.addEventListener("click", () => {
  var url = createURL(input.value);
  fetch(url)
    .then((response) => response.json())
    .then((json) => json.contents.translated)
    .then((val) => {
      output.innerText = val;
    });
});
