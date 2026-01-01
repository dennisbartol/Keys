window.addEventListener("keydown", (event) =>{
  if(event.key === " ") {
    event.preventDefault();
  }
  
  document.getElementById("result").innerHTML = `The keyboard key which has been pressed is: 
  <span>${event.key === " " ? "Space" : event.key}</span> 
  <span>Keyboard key index: ${event.code}</span>
   `;
    // Edit late '25: .keyCode being deprecated => event.code
});










