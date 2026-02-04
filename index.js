// Event Listener With Anon Function
// document.querySelector('button').addEventListener('click', function () {
//   alert('I Got Clicked');
// });

//what to do when you need all buttons using forEach arrow
document.querySelectorAll('.drum').forEach(element => {
  element.addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case 'w':
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;

      case 'a':
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;

      case 's':
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;

      case 'd':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;

      case 'j':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

      case 'k':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;

      case 'l':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;

      default:
        console.log(buttonInnerHTML);
        break;
    }
  });
});

document.addEventListener('keypress', function (event) {
  // alert('Key Pressed!');
  console.log(event);
});
