let homeScoreScreen = document.getElementById("home-score")
let guestScoreScreen = document.getElementById("guest-score")

let homeScore = 12
let guestScore = 5

function updateScore(team) {
  switch (team) {
    case "forHome1": {
      homeScore += 1
      homeScoreScreen.textContent = homeScore
      break
    }
    case "forHome2": {
      homeScore += 2
      homeScoreScreen.textContent = homeScore
      break
    }
    case "forHome3": {
      homeScore += 3
      homeScoreScreen.textContent = homeScore
      break
    }
    case "forGuest1": {
      guestScore += 1
      guestScoreScreen.textContent = guestScore
      break
    }
    case "forGuest2": {
      guestScore += 2
      guestScoreScreen.textContent = guestScore
      break
    }
    case "forGuest3": {
      guestScore += 3
      guestScoreScreen.textContent = guestScore
      break
    }
    default: {
      console.error("tada")
      break
    }
  }
}

function newGame() {
  homeScore = 0
  guestScore = 0
  guestScoreScreen.textContent = 0
  homeScoreScreen.textContent = 0
}

document
  .getElementById("home-score-one-plus")
  ?.addEventListener("click", () => updateScore("forHome1"))
document
  .getElementById("home-score-two-plus")
  ?.addEventListener("click", () => updateScore("forHome2"))
document
  .getElementById("home-score-three-plus")
  ?.addEventListener("click", () => updateScore("forHome3"))
document
  .getElementById("guest-score-one-plus")
  ?.addEventListener("click", () => updateScore("forGuest1"))

document
  .getElementById("guest-score-two-plus")
  ?.addEventListener("click", () => updateScore("forGuest2"))
document
  .getElementById("guest-score-three-plus")
  ?.addEventListener("click", () => updateScore("forGuest3"))

document.getElementById("new-game").addEventListener("click", () => newGame())
