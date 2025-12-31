window.addEventListener("keydown", (event) =>{
  if (event.key === " ") {
    event.preventDefault();
  }
  
  document.getElementById("result").innerHTML = `The keyboard key which has been pressed is: 
  <span> ${event.key === " "}</span> <span>Keyboard key index: ${event.keyCode}</span> `;
    // Edit: .keyCode being deprecated
});





