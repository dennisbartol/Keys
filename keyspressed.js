window.addEventListener("keydown", (event) =>{
  document.getElementById("result").innerHTML = `Tadaaa - The key which has been pressed is: 
  <span> ${event.key}</span> <span>Keyboard key index: ${event.keyCode}</span> `;
});