// Detecting Button pressed

let numberOfDrumsButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumsButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color="white"; // thrigger whic Drum is trigger

    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
  });
}

// Detecting keyboard pressed
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "i":
      var snare2 = new Audio("sounds/snare.mp3");
      snare2.play();

      break;

    case "j":
      var snare = new Audio("sounds/snare2.mp3");
      snare.play();

      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("refresh it");
      break;
  }
}
