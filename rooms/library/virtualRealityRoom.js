 // Get all door elements
 const doors = document.querySelectorAll('.door');
 const message1 = document.getElementById('message');
 
 // Right door logic 
 const correctDoor = document.getElementById('door3'); 

 // Add event listeners for each door
 doors.forEach(door => {
   door.addEventListener('click', function () {
     if (this === correctDoor) {
       alert('We can\'t believe you found the right one! T25l');
       window.location.replace("library.html");
       
       sessionStorage.setItem("VRRoomDigit", "T25l");
       sessionStorage.setItem("shownTimeClock", document.getElementById("VRRoomTimer").innerHTML);
      } else {
      alert('Looks like you clicked the wrong door. Oh well...');
       location.reload();
     }
   });
 });
