let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function message(e){
  console.log(e);
}

btn1.addEventListener("click", message);

btn2.addEventListener("click", function(event) {
  console.log(event);
});