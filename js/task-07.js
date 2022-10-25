
let inputSize = document.querySelector("#font-size-control");
let inputText = document.querySelector("#text");

inputChange.addEventListener("input", handleInput);

function handInput(event) {
    inputText.style.fontSize = event.currentTarget.value + "px";
}