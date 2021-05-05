var input = document.querySelector("#text--input");
var button = document.querySelector("#translate");
var output = document.querySelector("#output--area");

function createURL(text) {
  return "https://api.funtranslations.com/translate/minion.json?text=" + text;
}
function catchError(error) {
  console.error(error);
  alert("something wrong with server!!");
}
button.addEventListener("click", () => {
  var url = createURL(input.value);
  fetch(url)
    .then((response) => response.json())
    .then((json) => json.contents.translated)
    .then((val) => {
      output.innerText = val;
    })
    .catch(catchError);
});
