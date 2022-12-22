let inputField = document.getElementById("guessInput");
let outputField = document.getElementById("output");
let guessButton = document.getElementById("guessButton");

let secret = Math.floor(Math.random() * 100);
let guess = -1;

guessButton.addEventListener("click", ()=>{
    guess = inputField.value;
    if (guess == secret) {
        outputField.innerText = "You WON";
    } else {
        if (guess < secret) {
            outputField.innerText = "It is more";
        } else {
            outputField.innerText = "It is less";
        }
    }
});
