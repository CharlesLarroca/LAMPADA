const turnOn = document.querySelector("#turn-on");
const turnOff = document.querySelector("#turn-off");
const lamp = document.querySelector("#lamp");

function lampOn() {
  lamp.src = "./img/ligada.jpg";
}

function lampOff() {
  lamp.src = "./img/desligada.jpg";
}

function brokenLamp() {
  lamp.src = "./img/quebrada.jpg";
  turnOn.disabled = true
  turnOff.disabled = true
}

function fixedLamp() {
  lamp.src = "./img/desligada.jpg";
  turnOn.disabled = false
  turnOff.disabled = false
}

turnOn.addEventListener("click", lampOn);

turnOff.addEventListener("click", lampOff);

lamp.addEventListener("dblclick", brokenLamp);
lamp.addEventListener('click', fixedLamp )
