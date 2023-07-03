var sounds = {
    1:"test1",
    2:"test2",
    3:"test3"
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function play_sound() {
    console.log(sounds[getRandomInt(3)])

}



var button = document.getElementById("button1");
button.addEventListener