let homeScoreScreen = document.getElementById("home-score")
let guestScoreScreen = document.getElementById("guest-score")

let homeFoulScreen = document.getElementById("home-foul")
let guestFoulScreen = document.getElementById("guest-foul")

let homeScore = 12
let guestScore = 5

let homeFoul = 0
let guestFoul = 0

function updateScreen() {
  homeScoreScreen.textContent = homeScore
  guestScoreScreen.textContent = guestScore
  homeFoulScreen.textContent = `Home Foul: ${homeFoul}`
  guestFoulScreen.textContent = `Guest Foul: ${guestFoul}`
  winningTeam()
}

function updateScore(team, points) {
  if (team === "home") {
    homeScore += points
  } else {
    guestScore += points
  }
  updateScreen()
}

function newGame() {
  homeScore = 0
  guestScore = 0
  homeFoul = 0
  guestFoul = 0
  updateScreen()
}

function winningTeam() {
  if (homeScore > guestScore) {
    homeScoreScreen.classList.add("winning")
    guestScoreScreen.classList.remove("winning")
  } else if (homeScore < guestScore) {
    guestScoreScreen.classList.add("winning")
    homeScoreScreen.classList.remove("winning")
  } else {
    homeScoreScreen.classList.remove("winning")
    guestScoreScreen.classList.remove("winning")
  }
}
function fouls(team) {
  if (team === "home") {
    homeFoul += 1
    homeFoulScreen.textContent = `Home Foul: ${homeFoul}`
  } else {
    guestFoul += 1
    guestFoulScreen.textContent = `Guest Foul: ${guestFoul}`
  }
}

updateScreen()

document
  .getElementById("home-score-one-plus")
  ?.addEventListener("click", () => updateScore("home", 1))
document
  .getElementById("home-score-two-plus")
  ?.addEventListener("click", () => updateScore("home", 2))
document
  .getElementById("home-score-three-plus")
  ?.addEventListener("click", () => updateScore("home", 3))
document
  .getElementById("guest-score-one-plus")
  ?.addEventListener("click", () => updateScore("guest", 1))
document
  .getElementById("guest-score-two-plus")
  ?.addEventListener("click", () => updateScore("guest", 2))
document
  .getElementById("guest-score-three-plus")
  ?.addEventListener("click", () => updateScore("guest", 3))

document.getElementById("new-game").addEventListener("click", () => newGame())

document.getElementById("home-foul-btn").addEventListener("click", () => fouls("home"))
document.getElementById("guest-foul-btn").addEventListener("click", () => fouls("guest"))
