// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}"> */

window.addEventListener("load", function() {
   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(){
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("Please enter valid information into required fields.");
         event.preventDefault();
      }
      // if (isNaN(pilotName.value) || isNaN(copilotName.value) || Number(fuelLevel.value) === "string" || Number(cargoMass.value) === "string") {
      //    alert("Please enter names for pilots and copilots and number values for fuel level and cargo mass.");
      //    event.preventDefault();
      // }
      let faultyItems = document.getElementById("faultyItems");
      let heading = document.getElementById("launchStatus");
      let pilot = document.getElementById("pilotStatus");
      let copilot = document.getElementById("copilotStatus");
      let fuel = document.getElementById("fuelStatus");
      let cargo = document.getElementById("cargoStatus");
      pilot.innerHTML = pilotName.value;
      copilot.innerHTML = copilotName.value;
      if (fuelLevel.value >= 10000 && cargoMass <= 10000) {
         heading.innerHTML = "Shuttle is ready for launch."
         heading.style.color = "green"; 
      }
      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuel.innerHTML = "Caution. There is not enough fuel the journey."
         heading.innerHTML = "Shuttle not ready for launch."
         heading.style.color = "red"; 
      }
      if (cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargo.innerHTML = "There is too much cargo for the ship to take off!";
         heading.innerHTML = "Shuttle not ready for launch."
         heading.style.color = "red"; 
      }
   });
});

// function emptyFields() {
//    let pilotName = document.getElementById("pilotName");
//    let copilotName = document.querySelector("input[name=copilotName]");
//    let fuelLevel = document.querySelector("input[name=fuelLevel]")
//    let cargoMass = document.querySelector("input[name=cargoMass]");
//    if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
//       alert("Please enter valid information into required fields.");
//    }
// }

// function launchReady(fuelStatus, cargoStatus) {
//    let faultyItems = document.getElementById("faultyItems");
//    let heading = document.getElementById("launchStatus");
//    let pilot = document.getElementById("pilotStatus");
//    let copilot = document.getElementById("copilotStatus");
//    let fuel = document.getElementById("fuelStatus");
//    let cargo = document.getElementById("cargoStatus");
//    pilot.innerHTML = pilotName.value;
//    copilot.innerHTML = copilotName.value;
//    if (fuelLevel.value >= 10000 && cargoMass <= 10000) {
//       heading.innerHTML = "Shuttle is ready for launch."
//       heading.style.color = "green"; 
//    }
//    if (fuelLevel.value < 10000) {
//       faultyItems.style.visibility = "visible";
//       fuel.innerHTML = "Caution. There is not enough fuel the journey."
//       heading.innerHTML = "Shuttle not ready for launch."
//       heading.style.color = "red"; 
//    }
//    if (cargoMass.value > 10000) {
//       faultyItems.style.visibility = "visible";
//       cargo.innerHTML = "There is too much cargo for the ship to take off!";
//       heading.innerHTML = "Shuttle not ready for launch."
//       heading.style.color = "red"; 
//    }
// }

