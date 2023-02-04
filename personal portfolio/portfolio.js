
//const userInput = document.getElementById("name")
const form = document.getElementById("contact-me-here");
const welcomeText = document.getElementById("welcome");


function onSubmit(event) {
    welcomeText.innerHTML = "Thanks for visiting!"
    event.preventDefault();
}

form.addEventListener("submit", onSubmit);

