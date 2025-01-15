// 2025 - Navyaa & Joseph

// Referenced HTML DOM Objects
const notReady = document.getElementById("notReady");
const unsureIfReady = document.getElementById("unsureIfReady");
const surelyReady = document.getElementById("surelyReady");

const foundDigitsDisplay = document.getElementById("foundDigitsDisplay");

const floorNavigationTimer = document.getElementById("floorNavigationTimer");
const userNameDisplay = document.getElementById("userNameDisplay");
const teaserMessage = document.getElementById("teaserMessage");

// Other Variables
let shownHints = [] // For generateHint()
let elapsedTime = undefined; // For increaseTime()

// Dictates the number of seconds that should pass before increasing
// the clock
const timeDelay = 20000; // For increaseTime()


function hideAndShow(hiddenElement, shownElement) {
  document.getElementById(hiddenElement).hidden = true;
  document.getElementById(shownElement).hidden = false;
}

function teasePlayer() {
  notReady.disabled = true;
  unsureIfReady.disabled = true;
  surelyReady.disabled = true;

  teaserMessage.hidden = false;
  setTimeout(() => {
    hideAndShow("playerReady", "shortBackstory");
  }, 2750);
}

function showPlayerName() {
  userNameDisplay.innerHTML = sessionStorage.getItem("usersName");
}

// Allows at most three hints to be displayed in no specific
// order when the user clicks the, "Hint," button within
// the top bar
function generateHint(appliedObject, firstHint, secondHint, thirdHint) {
  let randomHint = Math.floor(Math.random() * 3);

  try {
    switch (randomHint) {
      case 0:
        if (shownHints.includes("firstHint")) {
          generateHint(appliedObject, firstHint, secondHint, thirdHint);
        }
        else {
          document.getElementById(appliedObject).innerHTML = "💡" + firstHint;
          shownHints.push("firstHint");
        }
        break;
      case 1:
        if (shownHints.includes("secondHint")) {
          generateHint(appliedObject, firstHint, secondHint, thirdHint);
        }
        else {
          document.getElementById(appliedObject).innerHTML = "💡" + secondHint;
          shownHints.push("secondHint");
        }
        break;
      case 2:
        if (shownHints.includes("thirdHint")) {
          generateHint(appliedObject, firstHint, secondHint, thirdHint);
        }
        else {
          document.getElementById(appliedObject).innerHTML = "💡" + thirdHint;
          shownHints.push("thirdHint");
        }
        break;
    }
  }
  catch (RangeError) {
    // Executes when a number is being infinitely generated due to 
    document.getElementById(appliedObject).innerHTML = "💡 <i>Out of hints</i>";
  }
}

// Triggered whenever the player hovers their cursor over any, "Leave
// Classroom," (or similar) button
function warnUserOfExit() {
  alert("By exiting this room, the current states of its elements will be lost and reset. This could include incomplete progress (other than finding a digit of the passcode)");
}

function leaveCurrentRoom(roomTimer) {
  window.location.replace("../../rooms/floorNavigation/floorNavigation.html");
  sessionStorage.setItem("shownTimeClock", document.getElementById(roomTimer).innerHTML);
}

// Gets the current number of minutes to allow the increaseTime()
// function to begin counting from any point
function getCurrentTime(elapsedTimeObject) {
  document.getElementById(elapsedTimeObject).innerHTML = sessionStorage.getItem("shownTimeClock");
  elapsedTime = Number(document.getElementById(elapsedTimeObject).innerHTML.substring(2, 4))
}

function increaseTime(timerObject) {
  if (elapsedTime >= 30) {
    window.location.replace("../../timeRunOut.html");
  }
  else if (elapsedTime >= 25) {
    document.getElementById(timerObject).style.color = "yellow";

    document.getElementById(timerObject).innerHTML = "6:" + elapsedTime + " (HURRY!)";
    elapsedTime++;
    setTimeout(increaseTime, timeDelay, timerObject);
  }
  else if (elapsedTime < 10) {
    // Accounts for single-digit minute integers, displaying them correcty as
    // what would appear on a clock
    document.getElementById(timerObject).innerHTML = "6:0" + elapsedTime;
    elapsedTime++;
    setTimeout(increaseTime, timeDelay, timerObject);
  }
  else {
    document.getElementById(timerObject).innerHTML = "6:" + elapsedTime;
    elapsedTime++;
    setTimeout(increaseTime, timeDelay, timerObject);
  }
}
