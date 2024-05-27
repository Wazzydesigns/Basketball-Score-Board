homeScore = document.getElementById("home-scoreboard");
guestScore = document.getElementById("guest-scoreboard");

let homeScoreBoard = 0;
let guestScoreBoard = 0;

function addOneHome() {
    homeScoreBoard += 1;
    homeScore.textContent = homeScoreBoard;
}
function addTwoHome() {
    homeScoreBoard += 2;
    homeScore.textContent = homeScoreBoard;
}
function addThreeHome() {
    homeScoreBoard += 3;
    homeScore.textContent = homeScoreBoard;
}


function addOneGuest() {
    guestScoreBoard += 1;
    guestScore.textContent = guestScoreBoard;
}
function addTwoGuest() {
    guestScoreBoard += 2;
    guestScore.textContent = guestScoreBoard;
}
function addThreeGuest() {
    guestScoreBoard += 3;
    guestScore.textContent = guestScoreBoard;
}

