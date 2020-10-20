let resetButton = document.querySelector("#reset-button");
let resetNum = document.querySelector("#num-resets");
let count = 0;
resetButton.addEventListener("click",function(){
    count += 1;

if (teamOneGoal.innerHTML > teamTwoGoal.innerHTML) {alert("Team One Won!");}
if (teamOneGoal.innerHTML < teamTwoGoal.innerHTML) {alert("Team Two Won!");}

resetNum.innerHTML = count;
teamOneShoot.innerHTML = 0;
teamTwoShoot.innerHTML = 0;
teamOneGoal.innerHTML = 0;
teamTwoGoal.innerHTML = 0;
countTeamOne = 0
countTeamTwo = 0;
goalOne = 0;
goalTwo = 0;
});

let shootButton = document.querySelector("#teamone-shoot-button");
let teamOneShoot = document.querySelector("#teamone-numshots");
let teamOneGoal = document.querySelector("#teamone-numgoals");

let countTeamOne = 0;
let goalOne = 0;
shootButton.addEventListener("click", function () {
    countTeamOne += 1;
    teamOneShoot.innerHTML = countTeamOne;

    if (Math.random() > 0.8) {
        goalOne += 1;
        teamOneGoal.innerHTML = goalOne;
    }
});

let shootButtonTwo = document.querySelector("#teamtwo-shoot-button");
let teamTwoShoot = document.querySelector("#teamtwo-numshots");
let teamTwoGoal = document.querySelector("#teamtwo-numgoals");

let countTeamTwo = 0;
let goalTwo = 0;
shootButtonTwo.addEventListener("click", function (){
    countTeamTwo += 1;
    teamTwoShoot.innerHTML = countTeamTwo;

    if (Math.random() > 0.8) { 
        goalTwo += 1;
        teamTwoGoal.innerHTML = goalTwo;
    }
});