// Write your JavaScript code here!

window.addEventListener("load", function() {
   let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(){
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLEvel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName == "" || copilotName == "" || fuelLEvel == "" || cargoMass == ""){
         alert("Please enter valid information into required fields.")
      }
   })
}


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
