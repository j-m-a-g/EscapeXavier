// 2025 - Navyaa & Joseph

// Referenced HTML DOM Objects
const playerHasEscaped = document.getElementById("playerHasEscaped");

// Other Variables
const escapeMessage = "You've successfully escaped in time";


function showThatPlayerEscaped() {
    // Checks if the player's name is simply blank to not have
    // any whitespace when the escape message gets displayed
    if (
        sessionStorage.getItem("usersName") == "" ||
        sessionStorage.getItem("usersName") == " " ||
        sessionStorage.getItem("usersName") == null
    ) {
        playerHasEscaped.innerHTML = escapeMessage + "!";
    }
    else {
        playerHasEscaped.innerHTML = escapeMessage + " " + sessionStorage.getItem("usersName") + "!";
    }
}