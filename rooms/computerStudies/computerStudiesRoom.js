// 2025 - Navyaa & Joseph

// Referenced HTML DOM Variables
const repairPuzzleFirstPerspective = document.getElementById("repairPuzzleFirstPerspective");
const repairPuzzleSecondPerspective = document.getElementById("repairPuzzleSecondPerspective");
const componentSelection = document.getElementById("componentSelection");

const outlinedPlaceholders = document.getElementsByClassName("outlinedPlaceholder");
const repairDesktopButton = document.getElementById("repairDesktopButton");

const terminalArea = document.getElementById("terminalArea");
const sendToTerminalInput = document.getElementById("sendToTerminalInput");

// Other Variables
const componentsValue = "Components";
const CPUValue = "CPU";
const fanValue = "Fan";
const hardDriveValue = "Hard Drive";
const heatsinkValue = "Heatsink";
const opticalDriveValue = "Optical Drive";
const powerSupplyValue = "Power Supply";
const RAMValue = "RAM";

const dropdownClickSound = new Audio("../../audio/dropdownClickSoundEffect.mp3"); // For sound effect when user switches computer part selection


function hideAndShow(hiddenElement, shownElement) {
  document.getElementById(hiddenElement).hidden = true;
  document.getElementById(shownElement).hidden = false;
}

function switchDesktopPerspective() {
  if (repairPuzzleFirstPerspective.hidden == false) {
    hideAndShow("repairPuzzleFirstPerspective", "repairPuzzleSecondPerspective")
  }
  else {
    hideAndShow("repairPuzzleSecondPerspective", "repairPuzzleFirstPerspective");
  }
}

// Lets the user complete the Computer Studies Room puzzle through allowing
// them to select the correct components and repair the computer
function componentSelectionChange(dropdownObject, imageObject) {
  dropdownClickSound.play();

  switch (document.getElementById(dropdownObject).value) {
    case componentsValue:
      document.getElementById(imageObject).src = "../../images/computerStudiesPuzzle/whatDesktopComponent.jpg";
      document.getElementById(imageObject).style.opacity = "0.25";
      break;
    case CPUValue:
      document.getElementById(imageObject).src = "../../images/computerStudiesPuzzle/desktopCPU.jpg";
      document.getElementById(imageObject).style.opacity = "1";
      break;
    case fanValue:
      document.getElementById(imageObject).src = "../../images/computerStudiesPuzzle/desktopFan.jpeg";
      document.getElementById(imageObject).style.opacity = "1";
      break;
    case hardDriveValue:
      document.getElementById(imageObject).src = "../../images/computerStudiesPuzzle/desktopHardDrive.jpg";
      document.getElementById(imageObject).style.opacity = "1";
      break;
    case heatsinkValue:
      document.getElementById(imageObject).src = "../../images/computerStudiesPuzzle/desktopHeatsink.jpeg";
      document.getElementById(imageObject).style.opacity = "1";
      break;
    case opticalDriveValue:
      document.getElementById(imageObject).src = "../../images/computerStudiesPuzzle/desktopOpticalDrive.jpeg";
      document.getElementById(imageObject).style.opacity = "1";
      break;
    case powerSupplyValue:
      document.getElementById(imageObject).src = "../../images/computerStudiesPuzzle/desktopPowerSupply.jpeg";
      document.getElementById(imageObject).style.opacity = "1";
      break;
    case RAMValue:
      document.getElementById(imageObject).src = "../../images/computerStudiesPuzzle/desktopRAM.jpg";
      document.getElementById(imageObject).style.opacity = "1";
      break;
  }

  // Checks if the user has selected all the correct components
  // in their designated areas inside the desktop
  for (outlinedPlaceholderImage in outlinedPlaceholders) {
    if (
      outlinedPlaceholders[0].getAttribute("src") == "../../images/computerStudiesPuzzle/desktopFan.jpeg" &&
      outlinedPlaceholders[1].getAttribute("src") == "../../images/computerStudiesPuzzle/desktopHeatsink.jpeg" &&
      outlinedPlaceholders[2].getAttribute("src") == "../../images/computerStudiesPuzzle/desktopHardDrive.jpg" &&
      outlinedPlaceholders[3].getAttribute("src") == "../../images/computerStudiesPuzzle/desktopPowerSupply.jpeg" &&
      outlinedPlaceholders[4].getAttribute("src") == "../../images/computerStudiesPuzzle/desktopOpticalDrive.jpeg" &&
      outlinedPlaceholders[5].getAttribute("src") == "../../images/computerStudiesPuzzle/desktopCPU.jpg" &&
      outlinedPlaceholders[6].getAttribute("src") == "../../images/computerStudiesPuzzle/desktopRAM.jpg"
    ) {
      repairDesktopButton.disabled = false;
    }
    else {
      repairDesktopButton.disabled = true;
    }
  }
}

// Displays and handles a command sent by the user to the
// terminal area, either by, "executing," it or throwing an
// error
function sendTextToTerminal() {
  terminalArea.innerHTML += "\nTigers@xavier-tigers:~$ " + sendToTerminalInput.value + "_";
  switch (sendToTerminalInput.value.toLowerCase()) {
    case "ls":
      terminalArea.innerHTML += "\nhome mySecret.txt ssh.txt";
      break;
    // Allows the following cases to execute the same code
    case "help":
    case "-help":
    case "?":
    case "-?":
      terminalArea.innerHTML += "\n\nHELP\n=============================================\nHaven't you seen the \"Hint\" button already?!\n";
      break;
    case "ifconfig":
      terminalArea.innerHTML += "\nenp0s3: flags=4163<UP ,BROADCAST ,RUNNING,MULTICAST> mtu 2000\ninet 10.0.2.15  netmask 255.0.0.0  broadcast 10.255.255.255\ninet6 fe80::c912:d4bf:3acb:f531  prefixlen 64  scopeid 0x20<link>\nether 08:00:27:d6:51:a6  txqueuelen 1000  (Ethernet)\nRX packets 1442  bytes 632447 (632.4 KB)\nRX errors 0  dropped 0  overruns 0  frame 0\nTX packets 1540  bytes 149029 (149.0 KB)\nTX errors 0  dropped 0  overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP ,LOOPBACK,RUNNING> mtu 65536\ninet 127.0.0.1  netmask 255.0.0.0\ninet6 ::1  prefixlen 128  scopeid 0x10<host>\nloop  txqueuelen 1000  (Local Loopback)\nRX packets 2012  bytes 180484 (180.4 KB)\nRX errors 0  dropped 0  overruns 0  frame 0\nTX packets 2012  bytes 180484 (180.4 KB)\nTX errors 0  dropped 0  overruns 0  carrier 0  collisions 0";
      break;
    case "cat":
      terminalArea.innerHTML += "\nPlease ensure you specify the file you'd like to display the contents of";
      break;
    case "cat mysecret.txt":
      terminalArea.innerHTML += "\nNothing to see here...";
      break;
    case "cat ssh.txt":
      terminalArea.innerHTML += "\nUsername: virtual-tigers\nDomain: escapexavierpuzzle.net\nPort: 58526\nPassword: 0neTw0Three@B(";
      break;
    case "ssh":
      terminalArea.innerHTML += "\nPlease ensure you specify the machine you'd like to connect to";
      break;
    case "ssh virtual-tigers@escapexavierpuzzle.net":
      terminalArea.innerHTML += "\nPlease ensure you specify the port you'd like to connect to";
      break;
    case "ssh virtual-tigers@escapexavierpuzzle.net -p 58526":
      terminalArea.innerHTML += "\nThe authenticity of the host '[escapexavierpuzzle.net]:58526 ([127.0.0.1]: 58526) can't be established.\nED25519 key fingerprint is SHA256:4S9EbTSSRZm32I+cdM5TyzthpQryv5kudRP9PIKT7XQ.\nType \'accept-fingerprint\' to continue connecting"
      break;
    case "accept-fingerprint":
      terminalArea.innerHTML += "\nUse the, \'password -<your password here>\'command to connect to the SSH.";
      break;
    case "password -0netw0three@b(":
      terminalArea.innerHTML += "\nExecuting script...";
      setTimeout(() => {
        terminalArea.innerHTML += "\nRm91cg==";
      }, 2000);
      
      sessionStorage.setItem("computerStudiesDigit", "Rm91cg==");
      break;
    case "clear":
      terminalArea.innerHTML = "";
      break;
    default:
      terminalArea.innerHTML += "\nUNABLE TO RUN COMMAND. Ensure that you have spelled the command correctly or that the right parameters associated with it have been entered.";
      break;
  }
}
