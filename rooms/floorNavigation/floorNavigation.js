// 2025 - Navyaa & Joseph

// Referenced HTML DOM Objects
const floorNavigationBody = document.getElementById("floorNavigationBody");

const navigateToFloor1 = document.getElementById("navigateToFloor1");
const navigateToFloor2 = document.getElementById("navigateToFloor2");
const navigateToFloor3 = document.getElementById("navigateToFloor3");

const firstFloorLobby = document.getElementById("firstFloorLobby");
const secondFloorComputerStudiesRoom = document.getElementById("secondFloorComputerStudiesRoom");
const secondFloorLibrary = document.getElementById("secondFloorLibrary");
const thirdFloorArtRoom = document.getElementById("thirdFloorArtRoom");

// Other Variables
const buttonClickSound = new Audio("../../audio/dropdownClickSoundEffect.mp3");


function switchCurrentFloor(floorNumber) {
  buttonClickSound.play();

  // Resets the states of all the floor navigation buttons prior
  navigateToFloor1.disabled = false;
  navigateToFloor2.disabled = false;
  navigateToFloor3.disabled = false;

  firstFloorLobby.hidden = true;
  secondFloorComputerStudiesRoom.hidden = true;
  secondFloorLibrary.hidden = true;
  thirdFloorArtRoom.hidden = true;

  switch (floorNumber) {
    case 1:
      navigateToFloor1.disabled = true;
      floorNavigationBody.style.backgroundImage = "url(../../images/roomBackdrops/firstFloorPlan.jpg)";

      firstFloorLobby.hidden = false;
      break;
    case 2:
      navigateToFloor2.disabled = true;
      floorNavigationBody.style.backgroundImage = "url(../../images/roomBackdrops/secondFloorPlan.jpg)";

      secondFloorComputerStudiesRoom.hidden = false;
      secondFloorLibrary.hidden = false;
      break;
    case 3:
      navigateToFloor3.disabled = true;
      floorNavigationBody.style.backgroundImage = "url(../../images/roomBackdrops/thirdFloorPlan.jpg)";

      thirdFloorArtRoom.hidden = false;
      break;
  }
}
