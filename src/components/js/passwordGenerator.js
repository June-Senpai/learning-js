const passwordLengthInRange = document.getElementById("passwordLengthInRange")
const passwordLengthInNumbers = document.getElementById("passwordLengthInNumbers")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")
const passwordDisplay = document.getElementById("passwordDisplay")

const form = document.getElementById("passwordGeneratorForm")

function syncPasswordLength(e) {
  const value = e.target.value
  passwordLengthInRange.value = value
  passwordLengthInNumbers.value = value
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126))

function generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}

function submit(e) {
  e.preventDefault()
  const passwordLength = passwordLengthInNumbers.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(
    passwordLength,
    includeUppercase,
    includeNumbers,
    includeSymbols
  )
  passwordDisplay.textContent = password
}

function copy() {
  navigator.clipboard.writeText(passwordDisplay.textContent)
}

passwordLengthInNumbers.addEventListener("input", syncPasswordLength)
passwordLengthInRange.addEventListener("input", syncPasswordLength)
form.addEventListener("submit", submit)

document.getElementById("copy-btn").addEventListener("click", copy)
