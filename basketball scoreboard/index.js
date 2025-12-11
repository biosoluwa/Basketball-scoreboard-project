
let homeScore = 0;
let guestScore = 0;
let homeElem = document.getElementById("homescore");
let guestElem = document.getElementById("guestscore");



function updateHomeScore(num){
 homeScore += num;
homeElem.textContent = homeScore;
}

function updateGuestScore(num){
    guestScore += num;
    guestElem.textContent = guestScore;
}