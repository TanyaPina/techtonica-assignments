const coin = document.getElementsByClassName("coin");
const flipButton = document.getElementsById("flip");
const resetButton = document.getElementsById("reset");

let heads = 0;
let tails = 0;
//sets values on scoreboard to 0

flipButton.addEventListener("onClick", () => {
    //adding event listener when user clicks on flip button
    let i = Math.floor(Math.random() * 2);
    //seting a random number generator to determine heads or tails
    coin.style.animation = "none";
    //there is no animation in a default stage
    if(i){
    //if i is not rounded to 0 and therefore true
    setTimeout(function() {
        coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;  
    // it is heads, spin coin for 3 seconds forwards and add a point to 
    //heads counter on scoreboard. Timeout action at 100 millliseconds.  
    }
    else{
    //if i is rounded to 0
    setTimeout(function() {
        coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    // it is tails, spin coin for 3 seconds forwards and add a point to 
    //tails counter on scoreboard. Timeout action at 100 millliseconds.     
    }
    setTimeout(updateStats, 3000);
    //this event will tiemout and update stats at 3000 milliseconds.
})