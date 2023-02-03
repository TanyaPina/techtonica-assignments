
const userInput = document.getElementById("name")

//element.addEventListener("submit", (event) => {
 //   event.preventDefault();
 //   console.log(userInput.value);
//})
const form = document.getElementById("contact-me-here");
const welcomeText = document.getElementById("welcome");
/*
element.addEventListener("submit", function () {
    
    document.getElementById("welcome").innerHTML = "Hello!";
});
//function formFunction(){
//    document.getElementById("welcome").innerHTML =  "Hello!";
//}
*/

function onSubmit(event) {
    welcomeText.innerHTML = "Thanks for visiting!"
    event.preventDefault();
}

form.addEventListener("submit", onSubmit);

