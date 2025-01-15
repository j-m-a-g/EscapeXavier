// 2025 - Navyaa & Joseph

const codeDisplay = document.getElementById("codeDisplay");
const correctPasscode = ["1","9","4","1"];
const beepSoundEffect = new Audio("../../audio/keypadBeepSoundEffect.mp3");


function displayFoundDigits() {
  const foundDigitsDisplay = document.getElementById("foundDigitsDisplay");

  foundDigitsDisplay.innerHTML = sessionStorage.getItem("artRoomDigit") + " " + sessionStorage.getItem("VRRoomDigit") + " " + sessionStorage.getItem("computerStudiesDigit") + " " + sessionStorage.getItem("libraryDigit");
}

function appendPasscodeDisplay(numberToAdd) {
  beepSoundEffect.play();

  codeDisplay.innerHTML += numberToAdd;

  if (codeDisplay.innerHTML == correctPasscode[0] + correctPasscode[1] + correctPasscode[2] + correctPasscode[3]) {
    setTimeout(function () {
      window.location.replace("../../successfulEscape.html");
    }, 1);
  }
}
