
var buttons = document.querySelectorAll("button.drum");
buttons.forEach(element => element.addEventListener("click", handleClick));
document.addEventListener("keypress", handleKeyPress);

function handleClick() {
    var buttonClicked = this.innerText;
    
    buttonAnimation(buttonClicked)
    playSound(buttonClicked)
}

function handleKeyPress(event) {

    buttonAnimation(event.key)
    playSound(event.key);
}

function playSound(interaction) {

    switch(interaction) {
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
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log("Error!");
    }

}

function buttonAnimation(buttonPressed) {
    
    var activeButton = document.querySelector("." + buttonPressed);
    activeButton.classList.add("pressed");

    setTimeout(removeAnimation, 100);

    function removeAnimation() {
        activeButton.classList.remove("pressed");
    }


}



