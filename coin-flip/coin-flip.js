const coin = document.getElementsByClassName("coin");
const flipButton = document.getElementById("flip");
const resetButton = document.getElementById("reset");
const headsParagraph = document.getElementsByClassName("heads");
const tailsParagraph = document.getElementsByClassName("tails");

let heads = 0;
let tails = 0;
//sets values on scoreboard to 0

flipButton.addEventListener("click", () => {
    //adding event listener when user clicks on flip button
    let i = Math.floor(Math.random() * 2);
    //seting a random number generator to determine heads or tails
    coin[0].style.animation = "none";
    //there is no animation in a default stage
    if(i){
    //if i is not rounded to 0 and therefore true
    setTimeout(function() {
        //headsParagraph[0].style.animation = "spin-heads 3s forwards";
        document.getElementById("heads").style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;  
    // it is heads, spin coin for 3 seconds forwards and add a point to 
    //heads counter on scoreboard. Timeout action at 100 millliseconds.  
    }
    else{
    //if i is rounded to 0
    setTimeout(function() {
        document.getElementById("tails").style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    // it is tails, spin coin for 3 seconds forwards and add a point to 
    //tails counter on scoreboard. Timeout action at 100 millliseconds.     
    }
    setTimeout(updateScoreboard, 3000);
    //this event will timeout and update stats at 3000 milliseconds.
    disableButton();
});

const headsCounter = document.getElementById("heads-count");
const tailsCounter = document.getElementById("tails-count");
function updateScoreboard(){
    headsCounter.innerHTML = `Heads: ${heads}`;
    tailsCounter.innerHTML = `Tails: ${tails}`;
}

function disableButton(){
    flipButton.disabled = true;
    setTimeout(function(){
        flipButton.disabled = false;
    },3000);
}

resetButton.addEventListener("click",() => {
    coin[0].style.animation = "none";
    heads = 0;
    tails = 0;
    updateScoreboard();
});
