window.addEventListener("keydown", function(e) {

  if(e.key == 'a') {
    console.log("Apertou a letra a");
  }

});

window.addEventListener("keyup", function(e) {

  if(e.key == "Enter") {
    console.log("Soltou o enter");
  }

});