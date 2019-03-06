// function addPu(){
//   // Number of inputs to create
//   let pickupDetails = document.getElementById("pickupDetails").value;
//   // Container <div> where dynamic content will be placed
//   let space = document.getElementById("space");
//   // Clear previous contents of the space
//   while (space.hasChildNodes()) {
//     space.removeChild(space.lastChild);
//   }
//   for (i = 0 ; i < pickupDetails; i++) {
//     // Append a node with a random text
//     space.appendChild(document.createTextNode("Member" + (i + 1)));
//     // Create an <input> element, set its type and name attributes
//     let input = document.createElement("input");
//     input.type = "text";
//     input.name = "member" + i;
//     space.appendChild(input);
//     // Append a line break
//     space.appendChild(document.createElement("br"));
//   }
// }
