let homeStoreEl =document.getElementById("home-score")
let homeScore = 0
let awayStoreEl=document.getElementById("away-score")
let awayScore=0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}
function increaseAwayScoreOne(){
    awayScore += 1
    awayStoreEl.textContent = awayScore
}
function increaseAwayScoreTwo(){
    awayScore += 2
    awayStoreEl.textContent = awayScore
}
function increaseAwayScoreThree(){
    awayScore += 3
    awayStoreEl.textContent = awayScore
}
function reset(){
    homeScore=0
    awayScore=0
    homeStoreEl.textContent=homeScore
    awayStoreEl.textContent=awayScore
}