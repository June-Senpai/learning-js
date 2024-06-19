let countValue = 0
let count = document.getElementById("count")
let saveValue = document.getElementById("saved-value")
function increase() {
  countValue += 1
  count.textContent = countValue
}

function save() {
  let saveCount = countValue + " - "
  saveValue.textContent += saveCount
  countValue = 0
  count.textContent = 0
}

document.getElementById("btn-increase")?.addEventListener("click", increase)
document.getElementById("save-count")?.addEventListener("click", save)
