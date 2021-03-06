fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then( function(json) {
      let destination = document.getElementById("missionTarget");
      let planetTarget = Math.floor(Math.random()*6);
      destination.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[planetTarget].name}</li>
         <li>Diameter: ${json[planetTarget].diameter}</li>
         <li>Star: ${json[planetTarget].star}</li>
         <li>Distance from Earth: ${json[planetTarget].distance}</li>
         <li>Number of Moons: ${json[planetTarget].moons}</li>
      </ol>
      <img src="${json[planetTarget].image}"> `
   });
});

window.addEventListener("load", function() {
   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(){
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let heading = document.getElementById("launchStatus");
      let pilot = document.getElementById("pilotStatus");
      let copilot = document.getElementById("copilotStatus");
      let fuel = document.getElementById("fuelStatus");
      let cargo = document.getElementById("cargoStatus");
      pilot.innerHTML = pilotName.value;
      copilot.innerHTML = copilotName.value;
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("Field values cannot be empty!");
         faultyItems.style.visibility = "hidden";
         event.preventDefault();
      }
      else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Please enter names for pilots and copilots and number values for fuel level and cargo mass.");
         faultyItems.style.visibility = "hidden";
         event.preventDefault();
      }
      else if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
         heading.innerHTML = "Shuttle is ready for launch."
         heading.style.color = "green"; 
         faultyItems.style.visibility = "hidden";
      }
      else if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuel.innerHTML = "Caution. There is not enough fuel the journey."
         heading.innerHTML = "Shuttle not ready for launch."
         heading.style.color = "red"; 
      }
      else if (cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargo.innerHTML = "There is too much cargo for the ship to take off!";
         heading.innerHTML = "Shuttle not ready for launch."
         heading.style.color = "red"; 
      }
      event.preventDefault();
   });
});

