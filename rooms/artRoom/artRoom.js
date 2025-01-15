// 2025 - Navyaa & Joseph

// Referenced HTML DOM Variables
const uploadApplePainting = document.getElementById("uploadApplePainting");


function hideAndShow(hiddenElement, shownElement) {
  document.getElementById(hiddenElement).hidden = true;
  document.getElementById(shownElement).hidden = false;
}

function checkCorrectPaintingName() {
  inputtedFileName = uploadApplePainting.value.substring(12).toLowerCase();
  if (inputtedFileName == "apple.jpg" ||
      inputtedFileName == "apple.jpeg" ||
      inputtedFileName == "apple.jfif") {
    hideAndShow("artPuzzleFirstPart", "artPuzzleSecondPart");
  }
  else {
    alert("That's not a painting of an, \"apple\"!");
  }
}
